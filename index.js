const express = require('express');// Import express
const bodyParser = require('body-parser');//dont need to know
const cors = require('cors');//dont need to know
const mongoose = require('mongoose');// Import mongoose data base
const session = require('express-session');// Import express-session
const router = express.Router();// Import express router


const app = express();// Create express app

// Set up express-session
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

mongoose.set('strictQuery', false);//let us put model in the data base even if it is not in the model

//This code connects a Node.js application to a MongoDB database using the Mongoose ODM.
mongoose.connect('mongodb+srv://roi023023:roi023023@cluster0.r2crwcm.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))//if the connection is successful
.catch(err => console.log('Error: ' + err));//if the connection is not successful

////this code sets the view engine for an Express.js application to "ejs".
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

app.use(bodyParser.urlencoded({ extended: true }));//dont need to know
app.use(express.static(__dirname + '/public'));//working with public folder
app.use(cors());//dont need to know
app.use(express.json());//json format

// Import routes:
const homeRoute = require('./routes/hompage');


// Use routes:
app.use('/', homeRoute);








//This code would start the HTTP server and listen for incoming connections on the specified 
//port (or the default port 3000 if PORT environment variable is not set).
const http = require('http').Server(app);
http.listen(3000, () => {
    console.log('Server is running on port 3000'); 
});