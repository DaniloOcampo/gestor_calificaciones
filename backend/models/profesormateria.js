const db = require('../config/db_config');

// Obtener todas las asignaciones
exports.getAll = async () => {
    const [rows] = await db.query(`
        SELECT pm.id, 
               u.nombre AS profesor, 
               m.nombre AS materia 
        FROM ProfesoresMaterias pm
        JOIN Usuarios u ON pm.profesor_id = u.id
        JOIN Materias m ON pm.materia_id = m.id
    `);
    return rows;
};

// Crear una nueva asignación
exports.create = async (profesor_id, materia_id) => {
    const [resultado] = await db.query('INSERT INTO ProfesoresMaterias SET ?', { profesor_id, materia_id });
    return resultado.insertId;
};

// Eliminar una asignación por ID
exports.delete = async (id) => {
    const [resultado] = await db.query('DELETE FROM ProfesoresMaterias WHERE id = ?', [id]);
    return resultado.affectedRows;
};

// Validar si un profesor con el rol correcto existe
exports.profesorExists = async (profesor_id) => {
    const [rows] = await db.query('SELECT id FROM Usuarios WHERE id = ? AND rol = "profesor"', [profesor_id]);
    return rows.length > 0;
};

// Validar si una materia existe
exports.materiaExists = async (materia_id) => {
    const [rows] = await db.query('SELECT id FROM Materias WHERE id = ?', [materia_id]);
    return rows.length > 0;
};
