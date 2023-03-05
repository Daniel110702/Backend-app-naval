import  express from "express";
import morgan from "morgan";
import pkg from '../package.json';
import requestsRoutes from './routes/requests.routes';

const app = express();

app.set('pkg', pkg);

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name, 
        description: app.get('pkg').description,
        version: app.get('pkg').version,
        author: app.get('pkg').author
    });
});

app.use('/requests', requestsRoutes);

export default app;