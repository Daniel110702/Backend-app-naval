import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

/**
 * Creación del modelo de autenticacion de usuarios en base de datos
 */
const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
})

/**
 * El metodo ecryptPassword es utilizado para cifrar la contraseña con la que
 * el usuario se registre y luego se suele almacenar esa contraseña cifrada en
 * base de datos como medida de seguridad ante ataques maliciosos a base de datos.
 * @param {*} password 
 * @returns 
 */
userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

/**
 * este metodo es utilizado para cifrar la contraseña que se obtiene
 * y luego comparar con la contraseña cifrada que se encuentra en 
 * base de datos
 * @param {*} password 
 * @param {*} receivedPassword 
 * @returns 
 */
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

export default model('User', userSchema);