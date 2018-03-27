const express = require('express');

let app = express();

let routes = require('./routes');

let path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//routes

app.get('/', routes.home);

// Listen on port 3000
app.listen(3000, ()=> {console.log("listening on port 3000");});
