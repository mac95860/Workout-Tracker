const Router = require("express").Router;
const logger = require("morgan");
const mongoose = require("mongoose");
const mongo = require("mongojs");

const db = require("../models");

const apiRoutes = new Router();


//create new workout !!!!!!!WORKS!!!!!!!!!!!!!!
apiRoutes.post("/workouts", async (req, res) => {
    const data = await db.Workout.create({type: "workout"});
    res.json(data);
})

//create new exercise
// apiRoutes.put("/exercise", ({body}, res) => {
//     db.Workout.create(body)
//     .then((body) => db.Workout.findOneAndUpdate({_id: mongojs.ObjectId(params)}, {$push: {exercise: body}}, {new: true} ))
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     }). catch (err => {
//         res.json(err);
//     })
        
// })

//get workouts !!!!!!!!!!!!WORKS!!!!!!!!!!!!!!!!!!
apiRoutes.get("/workouts", (req, res) => {
    db.Workout.find({})
        .then((data) => {
            res.json(data);
        })
});

//update workout (this is the api the api.js file in public calls)
apiRoutes.put("/workouts/:id", ({body, params}, res) => {
    db.Workout.findOneAndUpdate({_id: mongojs.ObjectId(params)}, {$push: {exercise: body}})
        .then(dbWorkout => {
            res.json(dbWorkout);
            if (err) {
                console.log(err);
            }
        })

});

apiRoutes.get("/workouts/range", (req, res) => {
    db.Workout.find({}, (err, data) => {
        res.json(data);
    })
})

module.exports = apiRoutes;