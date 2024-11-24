const backendURL = 'http://localhost:3000/api/auth';

// Función para manejar el inicio de sesión
function setupLogin() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        try {
            const response = await fetch(`${backendURL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, contraseña: password }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Error desconocido');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('usuario', data.usuario);
            localStorage.setItem('rol', data.rol);
            window.location.href = 'dashboard.html'; // Redirige al dashboard
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            document.getElementById('errorMessage').textContent = error.message;
        }
    });
}

// Función para manejar el registro
function setupRegister() {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const rol = document.getElementById('rol').value;

        try {
            const response = await fetch(`${backendURL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, email, contraseña: password, rol }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Error desconocido');
            }

            const data = await response.json();
            document.getElementById('successMessage').textContent = 'Usuario registrado exitosamente.';
            document.getElementById('errorMessage').textContent = '';

            // Limpiar el formulario después de un registro exitoso
            registerForm.reset();
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            document.getElementById('errorMessage').textContent = error.message;
            document.getElementById('successMessage').textContent = '';
        }
    });
}

// Llama a las funciones de configuración según la página
if (document.getElementById('loginForm')) {
    setupLogin();
}
if (document.getElementById('registerForm')) {
    setupRegister();
}
