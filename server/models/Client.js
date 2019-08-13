const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema({
    name: {type: String},
    email: {type: String},
    firstContact: {type: Date},
    emailType: {type: String},
    sold: {type: Boolean},
    owner: {type: String},
    country: {type: String}
})
const Client = mongoose.model('Client', clientSchema)

module.exports = Client