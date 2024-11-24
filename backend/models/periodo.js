const db = require('../config/db_config');

const Periodo = {
    // Obtener todos los periodos
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM Periodos');
        return rows;
    },

    // Crear un nuevo periodo
    create: async (nombre, fecha_inicio, fecha_fin) => {
        const [result] = await db.query(
            'INSERT INTO Periodos (nombre, fecha_inicio, fecha_fin) VALUES (?, ?, ?)',
            [nombre, fecha_inicio, fecha_fin]
        );
        return result.insertId; // Devuelve el ID del registro insertado
    },

    // Actualizar un periodo
    update: async (id, nombre, fecha_inicio, fecha_fin) => {
        const [result] = await db.query(
            'UPDATE Periodos SET nombre = ?, fecha_inicio = ?, fecha_fin = ? WHERE id = ?',
            [nombre, fecha_inicio, fecha_fin, id]
        );
        return result.affectedRows; // Devuelve el número de filas afectadas
    },

    // Eliminar un periodo
    delete: async (id) => {
        const [result] = await db.query('DELETE FROM Periodos WHERE id = ?', [id]);
        return result.affectedRows;
    },
};

module.exports = Periodo;
