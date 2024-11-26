document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logoutButton");
    const materiasList = document.getElementById("materiasList");
    const estudiantesTableBody = document.querySelector("#estudiantesTable tbody");

    const token = localStorage.getItem("token");

    // Función para cerrar sesión
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("token");
        window.location.href = "index.html";
    });

    // Cargar las materias del profesor
    async function loadMaterias() {
        try {
            const response = await fetch("/api/profesor/materias", {
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
                    li.dataset.id = materia.id;
                    li.addEventListener("click", () => loadEstudiantes(materia.id));
                    materiasList.appendChild(li);
                });
            } else {
                console.error("Error al cargar materias.");
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    }

    // Cargar los estudiantes de una materia
    async function loadEstudiantes(materiaId) {
        try {
            const response = await fetch(`/api/profesor/materias/${materiaId}/estudiantes`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            });

            if (response.ok) {
                const estudiantes = await response.json();
                estudiantesTableBody.innerHTML = ""; // Limpiar tabla

                estudiantes.forEach((estudiante) => {
                    const row = document.createElement("tr");

                    const nombreCell = document.createElement("td");
                    nombreCell.textContent = estudiante.nombre;

                    const correoCell = document.createElement("td");
                    correoCell.textContent = estudiante.email;

                    const notaCell = document.createElement("td");
                    const input = document.createElement("input");
                    input.type = "number";
                    input.value = estudiante.nota || 0;
                    notaCell.appendChild(input);

                    const actionCell = document.createElement("td");
                    const button = document.createElement("button");
                    button.textContent = "Guardar";
                    button.addEventListener("click", () => updateNota(estudiante.id, materiaId, input.value));
                    actionCell.appendChild(button);

                    row.appendChild(nombreCell);
                    row.appendChild(correoCell);
                    row.appendChild(notaCell);
                    row.appendChild(actionCell);

                    estudiantesTableBody.appendChild(row);
                });
            } else {
                console.error("Error al cargar estudiantes.");
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    }

    // Actualizar la nota de un estudiante
    async function updateNota(estudianteId, materiaId, nota) {
        try {
            const response = await fetch(`/api/profesor/materias/${materiaId}/estudiantes/${estudianteId}/nota`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nota }),
            });

            if (response.ok) {
                alert("Nota actualizada exitosamente.");
            } else {
                alert("Error al actualizar la nota.");
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    }

    loadMaterias(); // Inicializar la carga de materias al cargar la página
});
