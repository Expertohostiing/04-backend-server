require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');


//mean_user
//8JILhHF3pIfuU9Yd

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());
// lectura y parseeo del body
app.use(express.json());

// Base de datos
dbConnection();


// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/hospitales', require('./routes/hospitales'));
app.use('/api/medicos', require('./routes/medicos'));
app.use('/api/todo', require('./routes/busqueda'));
app.use('/api/upload', require('./routes/uploads'));
app.use('/api/login', require('./routes/auth'));



app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});