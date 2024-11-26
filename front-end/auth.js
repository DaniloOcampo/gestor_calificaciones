
document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault(); 

    
    const email = document.getElementById('email').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();

    try {
        // Realiza una solicitud POST al backend
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, contraseña }),
        });

        // Verifica si la solicitud fue exitosa
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Error al iniciar sesión');
        }

        const data = await response.json(); // Convierte la respuesta a JSON

        console.log('Respuesta del servidor:', data); // Depuración: muestra la respuesta

        // Redirige según el rol del usuario
        if (data.rol === 'profesor') {
            window.location.href = '/dashboard-profesor.html';
        } else if (data.rol === 'estudiante') {
            window.location.href = '/dashboard-estudiante.html';
        } else if (data.rol === 'administrador') {
            window.location.href = '/dashboard-administrador.html';
        } else {
            throw new Error('Rol desconocido');
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error.message); // Depuración
        alert(error.message); // Muestra el error al usuario
    }
});

// Escucha el evento 'submit' del formulario de registro
document.getElementById('register-form')?.addEventListener('submit', async (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Captura los datos ingresados por el usuario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();
    const rol = document.getElementById('rol').value.trim(); // Profesor o estudiante

    try {
        // Realiza una solicitud POST al backend
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, email, contraseña, rol }),
        });

        // Verifica si la solicitud fue exitosa
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Error al registrarse');
        }

        const data = await response.json(); // Convierte la respuesta a JSON

        console.log('Usuario registrado exitosamente:', data); // Depuración
        alert('Usuario registrado exitosamente. ¡Ahora puedes iniciar sesión!');
        window.location.href = '/index.html'; // Redirige al inicio de sesión
    } catch (error) {
        console.error('Error al registrarse:', error.message); // Depuración
        alert(error.message); // Muestra el error al usuario
    }
});
