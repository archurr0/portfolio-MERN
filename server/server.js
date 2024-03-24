require("dotenv").config()
const express = require("express");
const cors = require("cors");
const app = express();
const port =process.env.PORT || 5000;
const corsConfigs = require("./config/corsConfigs");
const {connectToMongoDB} = require('./database/database');

app.use(cors(corsConfigs));
app.use(express.json());
app.use("/feedback", require("./routes/feedbackRoutes.js"));

const startServer = async () => {
  await connectToMongoDB();
  app.listen(port, () => {
    console.log(`✅ Application running on port: ${port}`);
  });
};

startServer();

