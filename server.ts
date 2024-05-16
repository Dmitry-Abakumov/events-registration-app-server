import mongoose from "mongoose";
import dotenv from "dotenv";
import cron from "node-cron";
import app from "./app";

import { pingServer } from "utils/pingServer";

dotenv.config();

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST!)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .then(cron.schedule("*/5 * * * *", pingServer))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
