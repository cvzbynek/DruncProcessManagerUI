const { Kafka } = require('kafkajs');
const WebSocket = require('ws');
const http = require('http');
const http2 = require('http2');
const jspb = require('google-protobuf');
const proto = require('../src/generated/generic_pb.js');
const broadcastProto = require('../src/generated/broadcast_pb');

// Create an HTTP/2 server (non-secure)
const http2Server = http2.createServer((req, res) => {
  // Handle HTTP/2 requests
  // Add your routing and other logic here
});

// Create an HTTP/1.1 server
const httpServer = http.createServer();

// Setup WebSocket server on HTTP/1.1 server
const wss = new WebSocket.Server({ server: httpServer });

// Kafka setup
const kafka = new Kafka({
  clientId: 'run_control',
  brokers: ['localhost:30092']
});
const consumer = kafka.consumer({ groupId: 'my-group' });

// Kafka message deserialization function
function deserializeBroadcastMessage(binaryData) {
  var broadcastMessage = broadcastProto.BroadcastMessage.deserializeBinary(binaryData);
  var anyData = broadcastMessage.getData();
  if (anyData.getTypeUrl().endsWith('dunedaq.druncschema.PlainText')) {
    var plainTextMessage = proto.PlainText.deserializeBinary(anyData.getValue());
    return plainTextMessage.getText();
  } else {
    throw new Error("Data does not contain a PlainText message");
  }
}

// Start function
const start = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'process_manager.no_session', fromBeginning: true });

  consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(message.value);
      try {
        const text = deserializeBroadcastMessage(message.value);
        wss.clients.forEach(client => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(text);
          }
        });
      } catch (error) {
        console.error("Error deserializing message:", error);
      }
    },
  });

  wss.on('connection', ws => {
    console.log('New client connected');
  });

  httpServer.listen(3001, () => {
    console.log('WebSocket server started on port 3001');
  });

  http2Server.listen(3002, () => {
    console.log('HTTP/2 server running on port 3002');
  });
};

start().catch(console.error);
