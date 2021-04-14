const router = require('express').Router();
const workoutRoutes = require('./workout-routes');
const homeRoutes = require('./home-routes');
router.use('/workouts', workoutRoutes);
router.use('/', homeRoutes);


module.exports = router;