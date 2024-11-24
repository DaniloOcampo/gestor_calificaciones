const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',         
    user: 'root',            
    password: '12345', 
    database: 'gestor_calificaciones', 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Exportar el pool como promesa
module.exports = pool.promise();

 