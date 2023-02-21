const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connection = require('./src/db/connection');
const allRoute = require('./src/index.route');
dotenv.config();
const APP_PORT = process.env.APP_PORT || 5100;

(async () => {
  try {
    app.use(express.json());
    app.use(allRoute);
    await connection.authenticate();
    app.listen(APP_PORT, () => {
      console.log("Server is Running on port 5100");
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
