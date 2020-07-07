const Router = require("express").Router;
const logger = require("morgan");
const mongoose = require("mongoose");
const path = rquire("path");

const htmlRoutes = new Router();
e
const db = require("./models");

   htmlRoutes.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    htmlRoutes.get("/exercise", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/exercise"));
    });

    htmlRoutes.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats"));
    })

module.exports = htmlRoutes;



    


