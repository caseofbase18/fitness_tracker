const Workout = require("../models/workout.js")

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        Workout.find()
            .then((workouts) => {
                res.json(workouts);
            })
            .catch(err => {
                res.json(err);
            })
    })

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id)
        //add code to update workout
            .then((workouts) => {
                res.json(workouts);
            })
            .catch(err => {
                res.json(err);
            })
    })

    app.post("/api/workouts", (req, res) => {
        Workout.create(req.body)
            .then((workouts) => {
                res.json(workouts);
            })
            .catch(err => {
                res.json(err);
            })
    })

    app.get("/api/workouts/range", (req, res) => {
        Workout.find().limit(7)
            .then((workouts) => {
                res.json(workouts);
            })
            .catch(err => {
                res.json(err);
            })
    })
}