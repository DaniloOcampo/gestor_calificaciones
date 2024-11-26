const db = require("../config/db_config");

const adminController = {
    getUsers: async (req, res) => {
        try {
            const [users] = await db.query("SELECT id, nombre, rol FROM Usuarios");
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al obtener los usuarios." });
        }
    },

    getCourses: async (req, res) => {
        try {
            const [courses] = await db.query("SELECT id, nombre FROM Cursos");
            res.status(200).json(courses);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al obtener los cursos." });
        }
    },

    getSubjects: async (req, res) => {
        try {
            const [subjects] = await db.query("SELECT id, nombre FROM Materias");
            res.status(200).json(subjects);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al obtener las materias." });
        }
    },
};

module.exports = adminController;
