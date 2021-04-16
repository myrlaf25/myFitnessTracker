const router = require('express').Router();
const { Workout } = require('../models')


// GET all workouts /api/workouts
router.get("/workouts", async function (req, res) {
    try {
      const data = await Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: "$exercises.duration",
            },
          },
        },
      ]);
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });


router.get('/workouts/range', async (req, res) => {
    const workout= await new Workout(req.body)
    try {
        const workoutData = await Workout.aggregate([
            { $limit : 7},
            {
                $addFields: {
                    totalDuration: {
                        $sum: '$exercises.duration',
                    },
                    numExercises: {
                        $sum: '$exercises.name',
                    },
                    totalWeight: {
                        $sum: '$exercises.pounds',
                    },
                    totalSets: {
                        $sum: '$exercises.sets',
                    },
                    totalReps: {
                        $sum: '$exercises.reps',
                    },
                    totalDistance: {
                        $sum: '$exercise.distance',
                    }
                }
            }
        ])
        res.json(workoutData)
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
    })

//GET workout by ID
router.get('/workouts/:id', async (req, res) => {
    try{
        const workout = await (await Workout.findOne({_id: req.params.id})).populate('exercises')
        res.status(200).send(workout)
        
    } catch (err){
        console.log(err);
        res.status(500).send(err);
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
                },
                { new: true }
            )
            res.json(workoutData)
    } catch (err) {
        res.status(500).json(err);

    }
})

//POST create a new workout /api/workouts
router.post('/workouts', async function (req, res) {
    
    try {
        const workoutData = await
            Workout.create({ type: "exercises" })
        res.json(workoutData)
    }
    catch (err) {
        res.status(500).json(err);

    }
})




module.exports = router;



