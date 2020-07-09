const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const db = require("./models");

app.use("/api", require("./routes/apiRoutes"));
app.use("/", require("./routes/htmlRoutes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("DB Connected")
    }).catch( err => {
        console.log(`DB Connection Error: ${err.message}`)
    });

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});