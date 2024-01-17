const redis = require("redis");
const client = redis.createClient();
const sendVerificationEmail = require("./utils/sendVerficationEmail");
const Queue = require("bull");

// Create a new Bull queue
const emailQueue = new Queue("email", {
  redis: { host: "127.0.0.1", port: 6379 },
});


// Process the jobs in the email queue
emailQueue.process("sendVerificationEmail", async (job, done) => {
  await sendVerificationEmail(job.data)
  .then(() => done())
});


module.exports = {
  emailQueue
};
