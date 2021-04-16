const router = require("express").Router();
const path = require("path");
const viewDir = path.join(__dirname, '../view');

//get all
router.get('/', function (req, res){
    res.sendFile(path.join(viewDir, 'index.html'));
})

//get exercise
router.get("/exercise", function (req, res) {
  res.sendFile(path.join(viewDir, "exercise.html"));
});
//get stats
router.get("/stats", function (req, res) {
  res.sendFile(path.join(viewDir, "stats.html"));
});




module.exports = router;