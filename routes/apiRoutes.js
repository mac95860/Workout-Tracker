const Router = require("express").Router;
const logger = require("morgan");
const mongoose = require("mongoose");

const db = require("../models");

const apiRoutes = new Router();


//create new workout
apiRoutes.post("/api/workouts", (req, res) => {
    
})

//create new exercise
apiRoutes.post("/api/exercise", (req, res) => {
    
})

//get all workouts
apiRoutes.get("/api/workouts", (req, res) => {

});