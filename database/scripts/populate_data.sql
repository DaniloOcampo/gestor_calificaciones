USE gestor_calificaciones;

# Insertar cursos
INSERT INTO Cursos (nombre) VALUES 
('6º'), 
('7º'), 
('8º'), 
('9º'), 
('10º'), 
('11º');

# Insertar materias
INSERT INTO Materias (nombre, curso_id) VALUES
('Matemáticas', 1), 
('Español', 1), 
('Física', 2), 
('Química', 2),
('Historia', 3);

# Insertar usuarios (administrador, profesores y estudiantes)
INSERT INTO Usuarios (nombre, email, contraseña, rol) VALUES
('Administrador', 'admin@school.com', 'admin123', 'administrador'),
('Profesor A', 'profesorA@school.com', 'prof123', 'profesor'),
('Profesor B', 'profesorB@school.com', 'prof123', 'profesor'),
('Estudiante 1', 'estudiante1@school.com', 'stud123', 'estudiante'),
('Estudiante 2', 'estudiante2@school.com', 'stud123', 'estudiante');

# Insertar estudiantes (relación con usuarios y cursos)
INSERT INTO Estudiantes (usuario_id, curso_id) VALUES
(4, 1), -- Estudiante 1 en 6º
(5, 2); -- Estudiante 2 en 7º

# Insertar periodos académicos
INSERT INTO Periodos (nombre, fecha_inicio, fecha_fin) VALUES
('Primer Periodo', '2024-01-01', '2024-04-01'),
('Segundo Periodo', '2024-04-02', '2024-07-01'),
('Tercer Periodo', '2024-07-02', '2024-11-01');

# Relación profesores y materias
INSERT INTO ProfesoresMaterias (profesor_id, materia_id) VALUES
(2, 1), -- Profesor A enseña Matemáticas
(2, 2), -- Profesor A enseña Español
(3, 3), -- Profesor B enseña Física
(3, 4); -- Profesor B enseña Química

# Insertar calificaciones
INSERT INTO Calificaciones (estudiante_id, materia_id, periodo_id, nota) VALUES
(1, 1, 1, 4.5), -- Estudiante 1 tiene 4.5 en Matemáticas en el Primer Periodo
(1, 2, 1, 3.8), -- Estudiante 1 tiene 3.8 en Español en el Primer Periodo
(2, 3, 1, 4.2), -- Estudiante 2 tiene 4.2 en Física en el Primer Periodo
(2, 4, 1, 4.7); -- Estudiante 2 tiene 4.7 en Química en el Primer Periodo

