const Router = require("express").Router;
const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require("mongojs");

const db = require("../models");

const apiRoutes = new Router();

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
    const dbWorkout = await db.Workout.findOneAndUpdate({_id: mongojs.ObjectId(params.id)}, {$push: {exercise: body}}, { new: true });
    console.log(dbWorkout);
    res.json(dbWorkout);
    
});

//!!!!!!!!!!!!!!!!!works!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
apiRoutes.get("/workouts/range", async (req, res) => {
   try { 
       const data = await db.Workout.find({});
       console.log(data)
        res.json(data);
 } catch(error) {
     console.log(error);
 }
})

module.exports = apiRoutes;