const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello")
});

app.use(routes);

module.exports = app;