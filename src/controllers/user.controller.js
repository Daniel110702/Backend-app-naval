import Usuarios from '../models/Usuarios'
import jwt from 'jsonwebtoken'
import Role from '../models/Roles'
import config from '../config'

export const createUser = async (req, res) => {
    const {cedula, password} = req.body;

    const newUser = new Usuarios({
        cedula,
        password: await Usuarios.encryptPassword(password)
    })

    const role = await Role.findOne({name: "user"})
    newUser.roles = [role._id]

    const savedUser = await newUser.save();
    console.log(savedUser)

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 1800 // 30 min
    })

    res.status(200).json({token});
}

export const loginUser = async (req, res) => {
    const userFound =  await Usuarios.findOne({cedula: req.body.cedula}).populate("roles")
    if(!userFound) return res.status(400).json({message: "User not found"})

    const matchPassword = await Usuarios.comparePassword(req.body.password, userFound.password);

    if(!matchPassword) return res.status(401).json({token: null, message: "invalid password"})

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 1800
    })

    res.json({token})
}