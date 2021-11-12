require("dotenv").config;
const express = require("express")
const cors = require("cors")
const path = require("path")
const contactRoute = require('./route/contactRoute')

const app = express();

//creating the middlware
app.use(express.json())
app.use(cors())

const port = process.env.PORT;
app.listen(port, console.log(`server listening to port 5000`))