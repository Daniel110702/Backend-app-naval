import {Schema, model } from 'mongoose';

const requestSchema = new Schema({
    name: String,
    lastname: String,
    affair: String,

}, {
    timestamps: true,
    versionKey: false
})

export default model('Request', requestSchema);