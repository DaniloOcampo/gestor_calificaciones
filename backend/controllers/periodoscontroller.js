const PeriodoService = require('../services/periodoservice');

// Obtener todos los periodos
exports.getPeriodos = async (req, res) => {
    try {
        const periodos = await PeriodoService.obtenerPeriodos();
        res.status(200).json(periodos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo periodo
exports.createPeriodo = async (req, res) => {
    try {
        const { nombre, fecha_inicio, fecha_fin } = req.body;
        const periodoId = await PeriodoService.crearPeriodo(nombre, fecha_inicio, fecha_fin);
        res.status(201).json({ id: periodoId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un periodo
exports.updatePeriodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, fecha_inicio, fecha_fin } = req.body;
        const affectedRows = await PeriodoService.actualizarPeriodo(id, nombre, fecha_inicio, fecha_fin);

        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Periodo no encontrado' });
        }

        res.status(200).json({ message: 'Periodo actualizado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un periodo
exports.deletePeriodo = async (req, res) => {
    try {
        const { id } = req.params;
        const affectedRows = await PeriodoService.eliminarPeriodo(id);

        if (affectedRows === 0) {
            return res.status(404).json({ error: 'Periodo no encontrado' });
        }

        res.status(200).json({ message: 'Periodo eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
