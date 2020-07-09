const Router = require("express").Router;
const logger = require("morgan");
const mongoose = require("mongoose");

const db = require("../models");

const apiRoutes = new Router();


//create new workout
apiRoutes.post("/workouts", async (req, res) => {
    const data = await db.Workout.create({type: "workout"});
    res.json(data);
})

//create new exercise
apiRoutes.post("/exercise", ({body}, res) => {
    db.Workout.create(body)
    .then((body) => db.Workout.findOneAndUpdate({}, {$push: {exercise: body}}, {new: true} ))
    .then(dbWorkout => {
        res.json(dbWorkout);
    }). catch (err => {
        res.json(err);
    })
        
})

//get workouts
apiRoutes.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then((data) => {
            res.json(data);
        })
});

//update workout
apiRoutes.put("/workouts/:id", ({body, params}, res) => {
    db.Workout.find({_id: req.params.id})
        .then(dbWorkout => {

        })

})

module.exports = apiRoutes;