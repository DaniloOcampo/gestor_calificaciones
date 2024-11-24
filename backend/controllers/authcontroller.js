const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario'); 

// Registrar usuario
exports.register = async (req, res) => {
    const { nombre, email, contraseña, rol } = req.body;

    try {
        const hashedPassword = bcrypt.hashSync(contraseña, 10); // Encriptar la contraseña
        const nuevoUsuario = await Usuario.create({
            nombre,
            email,
            contraseña: hashedPassword,
            rol,
        });

        res.status(201).json({ message: 'Usuario registrado correctamente', usuario: nuevoUsuario });
    } catch (error) {
        console.error(error); // Registrar el error en la consola
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
};


// Iniciar sesión
exports.login = async (req, res) => {
    const { email, contraseña } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const passwordCorrect = bcrypt.compareSync(contraseña, usuario.contraseña);
        if (!passwordCorrect) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, 'clave-secreta', { expiresIn: '1h' });
        res.status(200).json({ message: 'Inicio de sesión exitoso', token, usuario: usuario.nombre, rol: usuario.rol });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};
