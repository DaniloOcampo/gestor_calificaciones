const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-config');

const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: DataTypes.ENUM('administrador', 'profesor', 'estudiante'),
        allowNull: false,
    },
});

module.exports = Usuario;
