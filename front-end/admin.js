document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logoutButton");
    const userList = document.getElementById("userList");
    const courseList = document.getElementById("courseList");
    const totalUsers = document.getElementById("totalUsers");
    const totalCourses = document.getElementById("totalCourses");
    const totalSubjects = document.getElementById("totalSubjects");

    const token = localStorage.getItem("token");

    // Función para cerrar sesión
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("token");
        window.location.href = "index.html";
    });

    // Cargar usuarios
    async function loadUsers() {
        try {
            const response = await fetch("/api/admin/users", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const users = await response.json();
                users.forEach(user => {
                    const li = document.createElement("li");
                    li.textContent = `${user.nombre} (${user.rol})`;
                    userList.appendChild(li);
                });
                totalUsers.textContent = users.length;
            } else {
                console.error("Error al cargar usuarios.");
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    }

    // Cargar cursos
    async function loadCourses() {
        try {
            const response = await fetch("/api/admin/courses", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const courses = await response.json();
                courses.forEach(course => {
                    const li = document.createElement("li");
                    li.textContent = course.nombre;
                    courseList.appendChild(li);
                });
                totalCourses.textContent = courses.length;
            } else {
                console.error("Error al cargar cursos.");
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    }

    // Cargar materias
    async function loadSubjects() {
        try {
            const response = await fetch("/api/admin/subjects", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const subjects = await response.json();
                totalSubjects.textContent = subjects.length;
            } else {
                console.error("Error al cargar materias.");
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    }

    loadUsers();
    loadCourses();
    loadSubjects();
});
