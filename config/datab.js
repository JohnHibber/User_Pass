
const mongoose = require('mongoose');
const chalk = require('chalk');
const dbURL = require('./prop').DB;

//Custom console
const connected = chalk.bold.cyan;
const  error = chalk.bold.red;
const termination = chalk.bold.magenta;

module.exports = () => {

mongoose.connect(dbURL, { useNewUrlParser: true})

.then(() => console.log(connected('Mongo conectado', dbURL)))
.catch(err => console.log(error(`Error de conexion ${err}`)))

process.on('SIGINT', () => {

    mongoose.connection.close(() => {
    
    console.log('Mongo desconectado');
    process.exit(0)

    });
});

}
