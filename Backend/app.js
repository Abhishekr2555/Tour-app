require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const packageRout = require("./Routes/packages");
const bookRout = require("./Routes/booking");
const adminRoute = require("./Routes/admin");
const custmoreDetails = require('./Routes/custmore')

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

app.use("/package", packageRout);
app.use("/booking", bookRout);
app.use("/admin", adminRoute);
app.use('/customerdetail',custmoreDetails)

// /parser

app.listen(8800, () => {
  console.log("server started on port 8800");
});



// mongoose.connect('mongodb://localhost:27017/tourapp', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect('mongodb://localhost:27017/tourapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));