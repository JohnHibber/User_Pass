const express = require('express');
const bodyParser = require('body-parser');
const prop = require('./config/prop');
const usersRuta = require('./users/rutas');
const db = require('./config/datab');

//inicar la base de datos
db();
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended: true});
const app = express();
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

//iniciar las rutas
const rutas = express.Router();

//usar express routes para las rutas
app.use('/api',rutas);
usersRuta(rutas);

app.listen(prop.PORT, () => console.log (`Servidor Activo ${prop.PORT}`));