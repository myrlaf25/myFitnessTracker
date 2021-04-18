const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
        day: {
            type: Date,
            default: Date.now()
        },
        exercises: [
            {
                type: {
                    type: String, 
                    trim: true, 
                    required: 'Must include type of exercise'
                },
                name: {
                    type: String, 
                    trim: true, 
                    required: 'Must include name of exercise'
                },
                duration: {
                    type: Number, 
                    required: 'Must include exercise duration',
                },
                distance: {
                    type: Number,
                }, 
                weight: {
                    type: Number, 
                }, 
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                }
            }
        ],
        
       
});


const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;

