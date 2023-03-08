/**
 * Pagina de entrada de mis aplicacion, archivo principal.
 */
import  express from "express";
import morgan from "morgan";
import pkg from '../package.json';
import {createRoles} from './libs/initialSetup';
import requestsRoutes from './routes/requests.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes'

// inicializacion de la libreria express y creacion de los roles
const app = express();
createRoles();

// configuración de datos package.json
app.set('pkg', pkg);

//middlewares para deteccion de peticiones y lecturas de datos json
app.use(morgan('dev'));
app.use(express.json());

/**
 * la Siguiente porcion de codigo pinta en pantalla 
 * datos sobre el proyecto, entre los que se encuentra
 * proposito y autor de este proyecto.
 */

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name, 
        description: app.get('pkg').description,
        version: app.get('pkg').version,
        author: app.get('pkg').author
    });
});

// inicializacion de las rutas de las apis
app.use('/api/requests', requestsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes)

export default app;