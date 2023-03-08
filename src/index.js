/**
 * creacion del puerto del servidor de la aplicacion
 */
import app from './app';
import './database';

app.listen(3000);
console.log('Server on port', 3000);