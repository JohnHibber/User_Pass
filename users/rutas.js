const Users = require('./control');


module.exports = (rutas) => {

    rutas.post('/new', Users.crearUser);
    rutas.get('./users', Users.getUser);

}