const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers");
const connectDatabase = require("./helpers/database/connectDatabase")
const customErrorHandler = require("./middleware/errors/customErrorHandler")
const path = require("path");
//Environment Variables

dotenv.config({   
    path: "./config/env/config.env"
});

const app = express();
// Express - Body middleware

app.use(express.json());
const PORT = process.env.PORT;

// Routers Middleware

app.use("/api",routers);

//Error Handler

app.use(customErrorHandler);

// MongoDb Connection
connectDatabase();

//Static Files
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);
});