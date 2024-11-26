document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logoutButton");
    const materiasList = document.getElementById("materiasList");
    const calificacionesTableBody = document.querySelector("#calificacionesTable tbody");
    const promedioElement = document.getElementById("promedio");

    const token = localStorage.getItem("token");

    // Función para cerrar sesión
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("token");
        window.location.href = "index.html";
    });

    // Cargar las materias del estudiante
    async function loadMaterias() {
        try {
            const response = await fetch("/api/estudiante/materias", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            });

            if (response.ok) {
                const materias = await response.json();
                materias.forEach((materia) => {
                    const li = document.createElement("li");
                    li.textContent = materia.nombre;
                    materiasList.appendChild(li);
                });
            } else {
                console.error("Error al cargar materias.");
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    }

    // Cargar las calificaciones del estudiante
    async function loadCalificaciones() {
        try {
            const response = await fetch("/api/estudiante/calificaciones", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            });

            if (response.ok) {
                const calificaciones = await response.json();
                let totalCalificaciones = 0;

                calificaciones.forEach((calificacion) => {
                    const row = document.createElement("tr");

                    const materiaCell = document.createElement("td");
                    materiaCell.textContent = calificacion.materia;

                    const notaCell = document.createElement("td");
                    notaCell.textContent = calificacion.nota;

                    totalCalificaciones += calificacion.nota;

                    row.appendChild(materiaCell);
                    row.appendChild(notaCell);
                    calificacionesTableBody.appendChild(row);
                });

                const promedio = (totalCalificaciones / calificaciones.length).toFixed(2);
                promedioElement.textContent = promedio || "N/A";
            } else {
                console.error("Error al cargar calificaciones.");
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    }

    loadMaterias(); // Cargar las materias al iniciar
    loadCalificaciones(); // Cargar las calificaciones al iniciar
});
