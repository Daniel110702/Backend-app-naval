import { ROLES } from "../models/Roles"
import Usuarios from "../models/Usuarios"

export const checkDuplicateCedula = async (req, res, next) => {
    const user = await Usuarios.findOne({cedula: req.body.cedula})

    if(user) return res.status(400).json({message: 'the user already exists'})

    next();
    
}

export const checkRolesexited = (req, res, next) => {
    if(req.body.roles) {
        for(let i = 0; i < req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({message: `Role ${req.body.roles[i]} does not exist`})
            }
        }
    }
    next();
}