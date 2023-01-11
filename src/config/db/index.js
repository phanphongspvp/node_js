const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/food_dev');
        console.log('Connect susses !!!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };