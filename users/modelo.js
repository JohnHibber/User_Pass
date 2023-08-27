const mongoose = require('mongoose');
const Esquema = mongoose.Schema;

const userEsq = new Esquema({
user: {
    type: String,
    required: true
},
pass: {
    type: String,
    required: true
}},
{
    timestamps: true
});
module.exports = userEsq;

