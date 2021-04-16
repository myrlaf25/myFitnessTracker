const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;



const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myfitnesstracker", 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
 });




// Start the server
app.listen(PORT, () => {
  console.log(`App running on http://localhost: ${PORT}!`);
});
