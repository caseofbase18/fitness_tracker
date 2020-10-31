const Workout = require("../models/workout.js")

module.exports = function (app) {
    //gets workouts from db
    app.get("/api/workouts", (req, res) => {
        Workout.find()
            .then(dbworkouts => {
                res.json(dbworkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //id for routes
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate 
        (
            params.id,
            { $push: { exercises: body } }, { new: true, runValidators: true }
        )
            .then(dbworkouts => {
                res.json(dbworkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //posts workouts
    app.post("/api/workouts", (req, res) => {
        Workout.create({})
            .then(dbworkouts => {
                res.json(dbworkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //shows only 7 workouts per week
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({}).sort({ "day": 1 }).limit(7)
            .then(dbworkouts => {
                res.json(dbworkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });
};