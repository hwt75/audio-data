const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AudioFile = new Schema({
    group_name: String,
    sub_name: String,
    name: String,
    descrpition: String,
    address: String,
    meta_data: {}
})

module.exports = mongoose.model('audiofile', AudioFile);