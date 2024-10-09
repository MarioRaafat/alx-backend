import express from "express"
import redis from "redis"
import dotenv from "dotenv"

dotenv.config();

const app = express();
const client = redis.createClient();
const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 3300;

client.on("error", (error) => {
  console.error(error);
});

client.on("connect", () => {
    console.log("Redis client connected to the server");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});