const router = require('express').Router();
const { Workout } = require('../models')


//GET all workouts /api/workouts
router.get('/workouts', async (req, res) => {
    try {
        const workoutData = await Workout.find({});
    }
    catch (err) {
        res.status(500).json(err);
    }
})

//PUT update an exercise in the workout /api/workouts/:id
router.put('/workouts/:id', async (req, res) => {
    try {
        const workoutData = await
            Workout.updateOne(
                { _id: req.params.id },
                {
                    $push: { exercises: req.body },
                    $inc: { totalDuration: req.body.duration }
                },
                { new: true }
            )
    } catch (err) {
        res.status(500).json(err);

    }
})

//POST create a new workout /api/workouts
router.post('/workouts', async function (req, res) {
    try {
        const workoutData = await
            Workout.create({ type: "exercise" })
        res.json(workoutData)
    }
    catch (err) {
        res.status(500).json(err);

    }
})

//GET workouts range /api/workouts/range
// router.get('/workouts/range', async function (req, res){
//     try{
//         const workoutDataRange = Workout.find({}).limit(5);
//         res.json(workoutDataRange);
//     }
//     catch(err){
//        res.status(500).json(err);
//     }
// })
router.get("/api/workouts/range", async (req, res) => {
    try {
        const workout = await db.Workout.find({}, { $sort: { date: -1 } })
        //   .sort({ date: -1 })
        //   .then((workout) => {
        res.status(200).json(workout);

    }

    catch (err) {
        res.status(400).json(err);
    }
});




module.exports = router;



