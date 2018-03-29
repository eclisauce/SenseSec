const express = require('express');

let app = express();

const routes = require('./routes');

app.set('view engine', 'ejs');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

//routes

app.get('/', routes.home);

app.get('/teknik', routes.teknik);

app.get('/fordelar', routes.fordelar);


// Listen on port 3000
app.listen(process.env.PORT || 3000, ()=> {console.log("listening on port 3000");});
