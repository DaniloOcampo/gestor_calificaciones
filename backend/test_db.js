const db = require('./config/db_config');

async function testConnection() {
    try {
        const [rows] = await db.query('SELECT 1 + 1 AS resultado');
        console.log('Conexión exitosa a la base de datos:', rows);
    } catch (error) {
        console.error('Error en la conexión:', error);
    }
}

testConnection();
