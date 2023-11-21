const { Kafka } = require('kafkajs');
const WebSocket = require('ws');
const http = require('http');
const jspb = require('google-protobuf');
const proto = require('../src/generated/generic_pb.js');
const broadcastProto = require('../src/generated/broadcast_pb'); // Replace with the correct path to broadcast_pb.js

const server = http.createServer();
const wss = new WebSocket.Server({ server });

const kafka = new Kafka({
  clientId: 'run_control',
  brokers: ['localhost:30092']
});

const consumer = kafka.consumer({ groupId: 'my-group' });

// Deserialize function for BroadcastMessage
function deserializeBroadcastMessage(binaryData) {
  var broadcastMessage = broadcastProto.BroadcastMessage.deserializeBinary(binaryData);
  var anyData = broadcastMessage.getData();
  var plainTextMessage = new proto.PlainText();
  console.log(anyData.getValue())
  if (anyData.getTypeUrl().endsWith('dunedaq.druncschema.PlainText')) {
    var plainTextMessage = proto.PlainText.deserializeBinary(anyData.getValue());
    return plainTextMessage.getText();
  } else {
    throw new Error("Data does not contain a PlainText message");
  }
  
}

const start = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'process_manager.no_session', fromBeginning: true });

  consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(message.value)
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

  server.listen(3001, () => {
    console.log('WebSocket server started on port 3001');
  });
};

start().catch(console.error);