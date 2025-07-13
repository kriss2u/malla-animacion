const data = {
  nodes: [
    // Semestre 1
    { id: "Nivelación de Dibujo" },
    { id: "Técnicas de Dibujo" },
    { id: "Arte Digital" },
    { id: "Principios de la Animación" },
    { id: "Géneros y Estilos Audiovisuales" },
    { id: "Habilidades Numéricas" },
    { id: "Habilidades Básicas de Comunicación" },
    { id: "Inglés Básico I" },

    // Semestre 2
    { id: "Figura Humana y Anatomía" },
    { id: "Diseño y Modelado de Personajes y Entornos" },
    { id: "Técnicas de Animación Mixta" },
    { id: "Lenguaje y Narrativa Audiovisual" },
    { id: "Habilidades del Lenguaje Matemático" },
    { id: "Habilidades de Comunicación Efectiva" },
    { id: "Inglés Básico II" },

    // Semestre 3
    { id: "Figura Humana en Movimiento y Bocetaje" },
    { id: "Preproducción Visual" },
    { id: "Animación de Personajes" },
    { id: "Storyboard y Animatic" },
    { id: "Mentalidad Emprendedora" },
    { id: "Inglés Elemental I" },
    { id: "Fundamentos de Antropología" },

    // Semestre 4
    { id: "Modelado 3D" },
    { id: "Producción de Animación 2D" },
    { id: "Proyectos de Animación 2D" },
    { id: "Edición de Audio y Video" },
    { id: "Ética para el Trabajo" },
    { id: "Inglés Elemental II" },

    // Semestre 5
    { id: "Iluminación y Render" },
    { id: "Rigging" },
    { id: "Actuación Digital 3D" },
    { id: "Actuación para Animadores" },
    { id: "Técnicas de Animación 3D" },
    { id: "Práctica Laboral" },
    { id: "Inglés Intermedio I" },

    // Semestre 6
    { id: "Integración de Efectos" },
    { id: "Actuación Digital 3D Avanzada" },
    { id: "Desarrollo Actoral" },
    { id: "Taller de Animación" },
    { id: "Formulación de Proyectos de Animación" },
    { id: "Inglés Intermedio II" },

    // Semestre 7
    { id: "Animación para Nuevas Tecnologías" },
    { id: "Producción de Animación 3D" },
    { id: "Proyecto de Animación" },
    { id: "Producción y Distribución" },
    { id: "Innovación de Productos y Servicios" },
    { id: "Ética Profesional" },

    // Semestre 8
    { id: "Portafolio de Título" },
    { id: "Práctica Profesional" }
  ],links: [
    // Dibujo → Figura Humana
    { source: "Nivelación de Dibujo", target: "Figura Humana y Anatomía" },
    { source: "Figura Humana y Anatomía", target: "Figura Humana en Movimiento y Bocetaje" },

    // Técnicas de Dibujo → Diseño y Modelado → Preproducción → Modelado 3D
    { source: "Técnicas de Dibujo", target: "Diseño y Modelado de Personajes y Entornos" },
    { source: "Diseño y Modelado de Personajes y Entornos", target: "Preproducción Visual" },
    { source: "Preproducción Visual", target: "Modelado 3D" },

    // Producción de Animación 2D secuencia
    { source: "Animación de Personajes", target: "Producción de Animación 2D" },
    { source: "Producción de Animación 2D", target: "Proyectos de Animación 2D" },
    { source: "Producción de Animación 2D", target: "Edición de Audio y Video" },

    // Animación 3D
    { source: "Modelado 3D", target: "Rigging" },
    { source: "Rigging", target: "Actuación Digital 3D" },
    { source: "Actuación Digital 3D", target: "Actuación Digital 3D Avanzada" },
    { source: "Actuación Digital 3D Avanzada", target: "Producción de Animación 3D" },
    { source: "Producción de Animación 3D", target: "Proyecto de Animación" },

    // Comunicación e innovación
    { source: "Proyectos de Animación 2D", target: "Formulación de Proyectos de Animación" },
    { source: "Formulación de Proyectos de Animación", target: "Producción y Distribución" },
    { source: "Producción y Distribución", target: "Innovación de Productos y Servicios" },

    // Secuencia inglés
    { source: "Inglés Básico I", target: "Inglés Básico II" },
    { source: "Inglés Básico II", target: "Inglés Elemental I" },
    { source: "Inglés Elemental I", target: "Inglés Elemental II" },
    { source: "Inglés Elemental II", target: "Inglés Intermedio I" },
    { source: "Inglés Intermedio I", target: "Inglés Intermedio II" },

    // Final
    { source: "1° a 7° semestre aprobado", target: "Portafolio de Título" },
    { source: "1° a 7° semestre aprobado", target: "Práctica Profesional" }
  ]
};
