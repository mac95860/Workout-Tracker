const Router = require("express").Router;
const logger = require("morgan");
const mongoose = require("mongoose");
const mongo = require("mongojs");

const db = require("../models");

const apiRoutes = new Router();


//create new workout !!!!!!!WORKS!!!!!!!!!!!!!!
// apiRoutes.post("/workouts", async (req, res) => {
//     const data = await db.Workout.create({type: "workout"});
//     res.json(data);
// })

apiRoutes.post('/workouts', async ({body}, res) => {
    const data = await db.Workout.create(body);
    res.json(data);
})

//get workouts !!!!!!!!!!!!WORKS!!!!!!!!!!!!!!!!!!
apiRoutes.get("/workouts", async (req, res) => {
    const data = await db.Workout.find({})
    res.json(data);
    
});

//update workout (this is the api the api.js file in public calls)
apiRoutes.put("/workouts/:id", async ({body, params}, res) => {
    const dbWorkout = await db.Workout.findOneAndUpdate({_id: params.id}, {$push: {exercise: body}}, { new: true })
    res.json(dbWorkout);
    
});

//!!!!!!!!!!!!!!!!!works!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
apiRoutes.get("/workouts/range", async (req, res) => {
    const data = await db.Workout.find({});
    res.json(data);
    
})

module.exports = apiRoutes;