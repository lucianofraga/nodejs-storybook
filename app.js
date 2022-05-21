import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: './config/config.env' });

const server = express();
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
