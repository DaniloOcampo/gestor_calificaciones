const bcrypt = require('bcryptjs');

// Contraseña que deseas hashear
const contraseña = 'admin123';

// Generar hash
const hashedPassword = bcrypt.hashSync(contraseña, bcrypt.genSaltSync(10));

console.log(`Contraseña: ${contraseña}`);
console.log(`Hash generado: ${hashedPassword}`);
