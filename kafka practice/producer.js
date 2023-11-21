const { Kafka } = require("kafkajs");
const { Chance } = require("chance");

const chance = new Chance();

const kafka = new Kafka({
  clientId: "my-consumer",
  brokers: ["localhost:9092", "localhost:9093", "localhost:9094"],
});

const producer = kafka.producer();
const topic = "unique-topic";

const producerMessage = async () => {
  try {
    await producer.send({
        topic,
        messages: [
            { value: chance.animal()}
        ]
  });
  } catch (error) {
    console.log(error);
  }
};

const run = async () => {
  // Producing
  await producer.connect();
  setInterval(producerMessage, 1000);
};

run().catch(console.error);
