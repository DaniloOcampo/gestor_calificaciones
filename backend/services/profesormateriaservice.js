const profesoresMateriasModel = require('../models/profesormateria');

exports.getProfesoresMaterias = async () => {
    return await profesoresMateriasModel.getAll();
};

exports.createProfesorMateria = async (profesor_id, materia_id) => {
    // Validar que el profesor exista y tenga el rol correcto
    const profesorExiste = await profesoresMateriasModel.profesorExists(profesor_id);
    if (!profesorExiste) {
        throw new Error('El profesor no existe o no tiene el rol correcto');
    }

    // Validar que la materia exista
    const materiaExiste = await profesoresMateriasModel.materiaExists(materia_id);
    if (!materiaExiste) {
        throw new Error('La materia no existe');
    }

    // Crear la asignación
    return await profesoresMateriasModel.create(profesor_id, materia_id);
};

exports.deleteProfesorMateria = async (id) => {
    const filasAfectadas = await profesoresMateriasModel.delete(id);
    if (filasAfectadas === 0) {
        throw new Error('La asignación no existe');
    }
    return filasAfectadas;
};
