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


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

// exercises: [
            
//     {
//         type: Schema.Types.ObjectId,
//         ref: "Exercise",
//     }
// ],
// totalDuration: {
//     type: Number,
//     default: 0
// }