import express from "express";
import dotenv from "dotenv";
import connectDb from './config/db.js';
import morgan from "morgan";

// Loading the configuration
dotenv.config({ path: './config/config.env' });``

// Connecting to Mongodb
connectDb();

const server = express();
const PORT = process.env.PORT;

// Logging
if (process.env.NODE_ENV === 'development') {
    server.use(morgan('dev'));
}

server.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
