const express  = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();
app.listen(port);

console.log("Server Started on port: " + port);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const routes = require('./routes/user');
routes(app); 
