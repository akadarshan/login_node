const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const route = require("./route");
const { json } = require("body-parser");
mongoose.connect("mongodb+srv://user:apstndp16@cluster-demo.3udla.mongodb.net/Student?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    const app = express();
    app.use("/api", route);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
    app.listen(process.env.PORT || 3000, () => {
        console.log("Server Started on 3000 !!");
    });
});