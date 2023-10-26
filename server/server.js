const { Kafka } = require('kafkajs');
const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

const kafka = new Kafka({
  clientId: 'run_control',
  brokers: ['localhost:30092']
});

const consumer = kafka.consumer({ groupId: 'my-group' });

const start = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'process_manager.no_session', fromBeginning: true });

  consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const payload = message.value.toString();
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(payload);
        }
      });
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
