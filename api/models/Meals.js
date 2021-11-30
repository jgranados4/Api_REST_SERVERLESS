const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Meals = mongoose.model('Meals', new Schema({
    name: String,
    description: String,
}));
module.exports = Meals;