const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestor_calificaciones', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
