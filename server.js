const express = require("express");
const app = express();
const tasks = require("./route/task");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not_found");
const errorHandlerMiddleware = require("./middleware/errorHandler");
//middleware
app.use(express.json());

//route
app.use("/api/v1/task", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
