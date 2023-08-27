const mongoose = require('mongoose');
const usersEsq = require('./modelo');

usersEsq.static = {
   create: function (data, cb){
      const user = new this (data);
      user.save(cb);
   },

   get: function (query, cb) {
    this.find(query, cb);
   },
}

const usersModelo = mongoose.model('Users&PassWord',usersEsq);
module.exports = usersModelo;