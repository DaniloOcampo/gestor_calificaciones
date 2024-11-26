const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db_config"); 

const authController = {
    register: async (req, res) => {
        const { nombre, email, contraseña, rol } = req.body;

        if (!nombre || !email || !contraseña || !rol) {
            return res.status(400).json({ error: "Todos los campos son obligatorios." });
        }

        try {
            // Verificar si el correo ya está registrado
            const [existingUser] = await db.query("SELECT * FROM Usuarios WHERE email = ?", [email]);
            if (existingUser.length > 0) {
                return res.status(400).json({ error: "El correo ya está registrado." });
            }

            // Encriptar la contraseña
            const hashedPassword = bcrypt.hashSync(contraseña, 10);

            // Insertar usuario en la base de datos
            await db.query(
                "INSERT INTO Usuarios (nombre, email, contraseña, rol) VALUES (?, ?, ?, ?)",
                [nombre, email, hashedPassword, rol]
            );

            res.status(201).json({ message: "Usuario registrado exitosamente." });
        } catch (error) {
            console.error("Error en el registro:", error);
            res.status(500).json({ error: "Error al registrar usuario." });
        }
    },

    login: async (req, res) => {
        const { email, contraseña } = req.body;

        if (!email || !contraseña) {
            return res.status(400).json({ error: "Correo y contraseña son obligatorios." });
        }

        try {
            // Buscar usuario en la base de datos
            const [user] = await db.query("SELECT * FROM Usuarios WHERE email = ?", [email]);

            if (user.length === 0) {
                return res.status(404).json({ error: "Usuario no encontrado." });
            }

            const usuario = user[0];

            // Verificar contraseña
            const isPasswordValid = bcrypt.compareSync(contraseña, usuario.contraseña);
            if (!isPasswordValid) {
                return res.status(401).json({ error: "Contraseña incorrecta." });
            }

            // Generar token JWT
            const token = jwt.sign(
                { id: usuario.id, email: usuario.email, rol: usuario.rol },
                process.env.JWT_SECRET || "clave_secreta",
                { expiresIn: "2h" }
            );

            res.status(200).json({
                message: "Inicio de sesión exitoso.",
                token,
                rol: usuario.rol,
            });
        } catch (error) {
            console.error("Error en el inicio de sesión:", error);
            res.status(500).json({ error: "Error al iniciar sesión." });
        }
    },
};

module.exports = authController;
