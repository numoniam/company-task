const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-admin",
  brokers: ["localhost:9092", "localhost:9093","localhost:9094"],
  retry: {
    retries: 10, 
    maxRetryTime: 10000, 
  },
});

const admin = kafka.admin();

const run = async () => {
  await admin.connect(); // Create the topic with 3 partitions

  await admin.createTopics({
    waitForLeaders: false,
    topics: [
      {
        topic: "unique-topic",
        numPartitions: 2,
        replicationFactor:3
      },
    ],
  });

  console.log("topic created");

  //   await admin.disconnect();
};

run().catch(console.error);
