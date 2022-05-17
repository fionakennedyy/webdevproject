const express = require('express'); //allows us to use express
const app = express(); //allows us to execute express
const path = require('path');

const userRoutes = require('./server/routes/userR'); //gives us access to all routes in user
const postRoutes = require('./server/routes/postR');

app.use(express.json()); //To parse JSON bodies (Applicable for Express 4.16+)
app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public', 'homepage.html')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public', 'homepage.html'));
})

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

app.use("/user", userRoutes);
app.use("/post", postRoutes);

const PORT = process.env.PORT || 3000; //server can be accessed via http://localhost:3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`)); //starts the server