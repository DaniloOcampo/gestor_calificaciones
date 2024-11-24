const db = require('../config/db_config');

const Curso = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM Cursos');
        return rows;
    },

    create: async (nombre) => {
        const [result] = await db.query('INSERT INTO Cursos (nombre) VALUES (?)', [nombre]);
        return result.insertId;
    },

    update: async (id, nombre) => {
        const [result] = await db.query('UPDATE Cursos SET nombre = ? WHERE id = ?', [nombre, id]);
        return result.affectedRows;
    },

    delete: async (id) => {
        const [result] = await db.query('DELETE FROM Cursos WHERE id = ?', [id]);
        return result.affectedRows;
    },
};

module.exports = Curso;
