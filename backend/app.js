const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");
const { use } = require("./routes/sauces");

const app = express();

app.use(helmet());

require('dotenv').config();

mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas!");
        console.error(error);
    });

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type," +
        "Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;