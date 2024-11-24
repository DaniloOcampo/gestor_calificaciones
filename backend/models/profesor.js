const db = require('../config/db_config');

const Profesor = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM Usuarios WHERE rol = "profesor"');
        return rows;
    },

    create: async (nombre, email, contraseña) => {
        const [result] = await db.query(
            'INSERT INTO Usuarios (nombre, email, contraseña, rol) VALUES (?, ?, ?, "profesor")',
            [nombre, email, contraseña]
        );
        return result.insertId;
    },

    update: async (id, nombre, email, contraseña) => {
        const [result] = await db.query(
            'UPDATE Usuarios SET nombre = ?, email = ?, contraseña = ? WHERE id = ? AND rol = "profesor"',
            [nombre, email, contraseña, id]
        );
        return result.affectedRows;
    },

    delete: async (id) => {
        const [result] = await db.query('DELETE FROM Usuarios WHERE id = ? AND rol = "profesor"', [id]);
        return result.affectedRows;
    },
};

module.exports = Profesor;
