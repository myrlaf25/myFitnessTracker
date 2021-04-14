const router = require('express').Router();
const { Workout, Exercise} = require('../models')


    //GET all workouts
    router.get ('/api/workouts', async (req, res)=>{
        try{
            const workoutData = Workout.find();
            res.json(workoutData);
        }
        catch(err){
           res.status(500).json(err);
        }
    }) 

    //PUT update an exercise in the workout
    router.put ('/api/workouts/:id', async (req, res)=>{
        try{
            const id = req.params.id;
            const data= req.body;
            const data = await
             Workout.updateOne({_id: id} ,{ $push: {exercises: data }})
            
        } catch(err){
            res.status(500).json(err);

        }
    })
  
    //POST create a new workout



module.exports=router;



