/**
 * Modelo de datos que se guardaran en la base de datos al 
 * momento de realizar una peticion 
 */
import {Schema, model } from 'mongoose';

const requestSchema = new Schema({
    name: String,
    guardia: String,
    fecha: Date,
    grado: String,
    departamento: String,
    division: String,
    asunto: String,
    objeto: String,
    lugar: String,
    desde: Date,
    hasta: Date,
    estado: String

}, {
    timestamps: true,
    versionKey: false
})

export default model('Request', requestSchema);