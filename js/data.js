// js/data.js

const datosEstaciones = [
    {
        id: 0,
        numero: 1,
        nombre: "Diseño y Trazado",
        tiempoEstandar: "05:45 min",
        youtubeId: "6DspyzSTRSA", // <--- ID del video de la Estación 1
        instruccion: "Tomar la plancha de cartón microcorrugado y realizar el trazado de las dimensiones nominales (Base: 18 cm, Profundidad: 25 cm, Alto: 12.2 cm). Es MANDATORIO usar la plantilla física guía. Medir manualmente con regla provoca una desviación crítica del +448% en el tiempo operativo.",
        alertas: "¡Ojo! Una desviación mayor a ±2 mm en esta estación causará el rechazo automático del producto en el control de calidad final.",
        preguntas: [
            {
                pregunta: "¿Qué herramienta es obligatoria en esta estación para evitar un retraso crítico del 448%?",
                opciones: ["Regla metálica milimetrada tradicional", "Plantilla física guía prediseñada (matriz)", "Cálculo visual según la experiencia"],
                correcta: 1
            },
            {
                pregunta: "¿Cuál es la tolerancia geométrica dimensional estricta permitida para el trazado?",
                opciones: ["± 5 mm", "± 10 mm", "± 2 mm"],
                correcta: 2
            },
            {
                pregunta: "Si un cartón es mal trazado desde esta estación, ¿cuál es su destino final en el flujo?",
                opciones: ["Se envía a Retrabajo para corregir con lápiz", "Rechazo Crítico Automático (descarte de materia prima)", "Se aprueba con observaciones estéticas"],
                correcta: 1
            }
        ]
    },
    {
        id: 1,
        numero: 2,
        nombre: "Corte de Piezas",
        tiempoEstandar: "08:34 min",
        youtubeId: "6DspyzSTRSA", // <--- ID del video de la Estación 1
        instruccion: "Realizar el corte de las piezas trazadas utilizando el bisturí industrial sobre la mesa de corte. Mantener un ángulo constante de 45 grados para asegurar la limpieza del corte. Esta estación está identificada cuantitativamente como el Cuello de Botella del sistema productivo.",
        alertas: "Monitorear el ritmo de trabajo. Al ser el cuello de botella, cualquier retraso aquí detiene el Takt Time de toda la línea de producción.",
        preguntas: [
            {
                pregunta: "¿Por qué la estación de Corte es considerada el 'Cuello de Botella' de la línea?",
                opciones: ["Porque requiere materiales más peligrosos", "Porque registra el mayor tiempo estándar por unidad en el estudio de tiempos", "Se eligió al azar para el control"],
                correcta: 1
            },
            {
                pregunta: "¿Cuál es el ángulo constante recomendado para operar el bisturí industrial de forma óptima?",
                opciones: ["90 grados rectos", "15 grados planos", "45 grados constantes"],
                correcta: 2
            },
            {
                pregunta: "Si al finalizar el corte la pieza presenta rebabas o bordes desalineados modificables, ¿cómo se clasifica?",
                opciones: ["Producto Aprobado", "Retrabajo (Falla estética modificable)", "Rechazo Definitivo"],
                correcta: 1
            }
        ]
    },
    {
        id: 2,
        numero: 3,
        nombre: "Plegado Estructural",
        tiempoEstandar: "04:00 min",
        instruccion: "Marcar firmemente las aristas y líneas guía antes de realizar el doblez definitivo. Asegurar que las pestañas mantengan la cuadratura y el ángulo de encaje de la caja premium.",
        alertas: "No doblar con demasiada fuerza para evitar romper el canal del cartón microcorrugado.",
        preguntas: [
            {
                pregunta: "¿Qué acción asegura que el doblado sea limpio y no rompa el cartón?",
                opciones: ["Humedecer las esquinas del cartón", "Marcar firmemente las aristas y líneas guía antes del doblez", "Doblar lo más rápido posible de un solo golpe"],
                correcta: 1
            },
            {
                pregunta: "Si el operario de Plegado termina antes que el de Corte, ¿qué concepto Lean se está rompiendo si sigue acumulando material?",
                opciones: ["Flujo Continuo (Balanceo de línea)", "Uso de EPPs", "Cinco S (5S)"],
                correcta: 0
            },
            {
                pregunta: "¿Qué se debe verificar visualmente durante el proceso de plegado?",
                opciones: ["Que el color del cartón sea brillante", "La cuadratura y el correcto ángulo de encaje de las pestañas", "Que no tenga polvo de almacenamiento"],
                correcta: 1
            }
        ]
    },
    {
        id: 3,
        numero: 4,
        nombre: "Pegado y Adhesión",
        tiempoEstandar: "04:45 min",
        instruccion: "Aplicar un cordón continuo de silicona caliente en las pestañas indicadas. Colocar los cierres de velcro en los puntos exactos del diseño. Para asegurar la calidad premium y evitar fallas críticas, ejercer presión bilateral fija por un mínimo de 3 minutos.",
        alertas: "El desprendimiento del velcro o silicona es una de las fallas más comunes detectadas en la validación real. Respeta el tiempo de presión.",
        preguntas: [
            {
                pregunta: "¿Cuál es el tiempo mínimo mandatorio para ejercer presión bilateral en los puntos de unión del velcro?",
                opciones: ["10 a 20 segundos de forma ligera", "Mínimo 3 minutos fijos para asegurar la adhesión", "No requiere presión si la silicona está muy caliente"],
                correcta: 1
            },
            {
                pregunta: "De acuerdo al checklist CC-FP-001, ¿el despegue del velcro o una mala adherencia estructural se considera una falla de qué tipo?",
                opciones: ["Falla No Crítica (Estética)", "Falla Crítica (Provoca el rechazo inmediato)", "Falla aceptable en el Producto 1"],
                correcta: 1
            },
            {
                pregunta: "¿Cómo debe aplicarse la silicona caliente en las uniones de las pestañas?",
                opciones: ["Por goteo disperso en el centro", "Un cordón continuo y uniforme", "Solo en las esquinas extremas"],
                correcta: 1
            }
        ]
    },
    {
        id: 4,
        numero: 5,
        nombre: "Acabado y Control de Calidad",
        tiempoEstandar: "05:05 min",
        instruccion: "Inspeccionar minuciosamente la caja utilizando el Formulario de Validación de Calidad CC-FP-001 v.02. Verificar los 11 ítems críticos y 8 ítems no críticos. Retirar con cuidado cualquier excedente de silicona o suciedad superficial.",
        alertas: "Esta es la última línea de defensa antes de que el producto llegue al cliente. La precisión en la evaluación es vital.",
        preguntas: [
            {
                pregunta: "¿Cuántos ítems críticos evalúa el formulario oficial de control de calidad CC-FP-001 v.02?",
                opciones: ["5 ítems", "11 ítems críticos", "8 ítems no críticos"],
                correcta: 1
            },
            {
                pregunta: "Si la caja final presenta una mancha de silicona superficial menor en el exterior (falla estética), ¿cuál es la acción según los criterios desarrollados?",
                opciones: ["Clasificar como Rechazo definitivo", "Clasificar como Retrabajo (Falla estética modificable)", "Aprobar ignorando el manual"],
                correcta: 1
            },
            {
                pregunta: "¿Cuál es el objetivo final de aplicar el control de calidad riguroso en esta estación?",
                opciones: ["Hacer que el proceso demore más tiempo", "Garantizar que el producto cumpla con el estándar Premium definido para el cliente", "Evaluar individualmente la velocidad de los operarios"],
                correcta: 1
            }
        ]
    }
];
