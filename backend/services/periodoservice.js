const Periodo = require('../models/periodo');

const PeriodoService = {
    // Obtener todos los periodos
    obtenerPeriodos: async () => {
        return await Periodo.getAll();
    },

    // Crear un nuevo periodo
    crearPeriodo: async (nombre, fecha_inicio, fecha_fin) => {
        if (!nombre || !fecha_inicio || !fecha_fin) {
            throw new Error('El nombre, fecha_inicio y fecha_fin son obligatorios');
        }
        return await Periodo.create(nombre, fecha_inicio, fecha_fin);
    },

    // Actualizar un periodo
    actualizarPeriodo: async (id, nombre, fecha_inicio, fecha_fin) => {
        if (!id || !nombre || !fecha_inicio || !fecha_fin) {
            throw new Error('El id, nombre, fecha_inicio y fecha_fin son obligatorios');
        }
        return await Periodo.update(id, nombre, fecha_inicio, fecha_fin);
    },

    // Eliminar un periodo
    eliminarPeriodo: async (id) => {
        if (!id) {
            throw new Error('El id del periodo es obligatorio');
        }
        return await Periodo.delete(id);
    },
};

module.exports = PeriodoService;
