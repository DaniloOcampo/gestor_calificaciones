const express = require('express');

// Importar las rutas
const estudiantesRoutes = require('./routes/estudiantes'); 
const profesoresRoutes = require('./routes/profesores'); 
const usuariosRoutes = require('./routes/usuarios'); 
const cursosRoutes = require('./routes/cursos'); 
const materiasRoutes = require('./routes/materias'); 
const calificacionesRoutes = require('./routes/calificaciones');
const periodosRoutes = require('./routes/periodos');
const profesoresMateriasRoutes = require('./routes/profesoresmaterias');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json()); // Middleware para procesar JSON

app.use('/api/estudiantes', estudiantesRoutes);
app.use('/api/profesores', profesoresRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/cursos', cursosRoutes);
app.use('/api/materias', materiasRoutes);
app.use('/api/calificaciones', calificacionesRoutes);
app.use('/api/periodos', periodosRoutes);
app.use('/api/profesoresMaterias', profesoresMateriasRoutes);
app.use('/api/auth', authRoutes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

