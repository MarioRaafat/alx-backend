import express from "express"
import redis from "redis"
import dotenv from "dotenv"
import { promisify } from 'util';

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


const setNewSchool = (schoolName, value) => {
    client.set(schoolName, value, redis.print);
};

const displaySchoolValue = async (schoolName) => {
    console.log(await promisify(client.GET).bind(client)(schoolName));
  };

async function main() {
    await displaySchoolValue('Holberton');
    setNewSchool('HolbertonSanFrancisco', '100');
    await displaySchoolValue('HolbertonSanFrancisco');
  }
  
  client.on('connect', async () => {
    console.log('Redis client connected to the server');
    await main();
  });