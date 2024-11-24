USE gestor_calificaciones;

# Tabla Usuarios
CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    rol ENUM('administrador', 'profesor', 'estudiante') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# Tabla Cursos
CREATE TABLE Cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

# Tabla Materias
CREATE TABLE Materias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    curso_id INT NOT NULL,
    descripcion TEXT DEFAULT NULL,
    FOREIGN KEY (curso_id) REFERENCES Cursos(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

# Tabla ProfesoresMaterias
CREATE TABLE ProfesoresMaterias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profesor_id INT NOT NULL,
    materia_id INT NOT NULL,
    FOREIGN KEY (profesor_id) REFERENCES Usuarios(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (materia_id) REFERENCES Materias(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

# Tabla Estudiantes
CREATE TABLE Estudiantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    curso_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (curso_id) REFERENCES Cursos(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

# Tabla Periodos
CREATE TABLE Periodos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    CONSTRAINT chk_fechas CHECK (fecha_inicio <= fecha_fin)
);

# Tabla Calificaciones
CREATE TABLE Calificaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_id INT NOT NULL,
    materia_id INT NOT NULL,
    periodo_id INT NOT NULL,
    nota DECIMAL(5, 2) NOT NULL CHECK (nota BETWEEN 0 AND 5),
    observaciones TEXT DEFAULT NULL,
    FOREIGN KEY (estudiante_id) REFERENCES Estudiantes(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (materia_id) REFERENCES Materias(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (periodo_id) REFERENCES Periodos(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

# Crear índices para mejorar el rendimiento
CREATE INDEX idx_usuario_id ON Estudiantes(usuario_id);
CREATE INDEX idx_curso_id ON Materias(curso_id);
CREATE INDEX idx_periodo_id ON Calificaciones(periodo_id);
