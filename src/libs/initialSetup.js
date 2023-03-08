import Role from '../models/Roles';

/**
 * esta funcion sirve para crear los roles de usuario
 * que existe en la app que se cree
 * @returns 
 */

export const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount()

        if (count > 0) return;

        const values = await Promise.all([
            new Role({name: 'user'}).save(),
            new Role({name: 'moderador'}).save(),
            new Role({name: 'admin'}).save()
        ])

        console.log(values);
    } catch (error) {
        console.error(error);
    }
}