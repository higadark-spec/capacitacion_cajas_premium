// js/quiz.js

let respuestasUsuario = [];

/**
 * Carga dinámicamente las preguntas de la estación seleccionada
 */
function cargarQuiz() {
    const idEstacion = localStorage.getItem('estacionSeleccionada') || 0;
    const estacion = datosEstaciones[idEstacion];
    
    const contenedor = document.getElementById('quiz-dynamic-content');
    contenedor.innerHTML = ''; // Limpiar contenido previo de otras estaciones
    
    // Inicializar el arreglo de respuestas del usuario con valores nulos (sin responder)
    respuestasUsuario = new Array(estacion.preguntas.length).fill(null);

    // Recorrer el banco de preguntas de la estación e inyectarlas al HTML
    estacion.preguntas.forEach((q, indicePregunta) => {
        const divPregunta = document.createElement('div');
        divPregunta.className = "mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm";
        
        let opcionesHTML = '';
        q.opciones.forEach((opcion, indiceOpcion) => {
            opcionesHTML += `
                <label class="flex items-center gap-3 bg-white p-3 rounded border border-gray-200 cursor-pointer hover:bg-amber-50/50 hover:border-amber-400 transition mb-2 text-sm font-medium text-gray-700">
                    <input type="radio" 
                           name="pregunta-${indicePregunta}" 
                           value="${indiceOpcion}" 
                           onclick="registrarRespuesta(${indicePregunta}, ${indiceOpcion})" 
                           class="w-4 h-4 text-amber-500 focus:ring-amber-400 border-gray-300">
                    <span>${opcion}</span>
                </label>
            `;
        });

        divPregunta.innerHTML = `
            <p class="font-bold text-gray-800 mb-3 text-sm md:text-base">${indicePregunta + 1}. ${q.pregunta}</p>
            <div class="space-y-1">
                ${opcionesHTML}
            </div>
        `;
        contenedor.appendChild(divPregunta);
    });
}

/**
 * Guarda temporalmente la opción elegida por el usuario para cada pregunta
 */
function registrarRespuesta(preguntaIdx, opcionIdx) {
    respuestasUsuario[preguntaIdx] = opcionIdx;
}

/**
 * Valida los resultados del examen bajo el criterio del 100% de efectividad
 */
function calificarExamen() {
    const idEstacion = localStorage.getItem('estacionSeleccionada') || 0;
    const estacion = datosEstaciones[idEstacion];

    // 1. Validar que el participante haya respondido TODO el cuestionario
    if (respuestasUsuario.includes(null)) {
        alert("⚠️ Por favor, responde todas las preguntas del examen antes de enviar.");
        return;
    }

    // 2. Conteo de respuestas correctas
    let respuestasCorrectas = 0;
    estacion.preguntas.forEach((q, idx) => {
        if (respuestasUsuario[idx] === q.correcta) {
            respuestasCorrectas++;
        }
    });

    // 3. Criterio de Ingeniería Industrial: 100% de aciertos para asegurar autonomía operativa
    const aproboModulo = (respuestasCorrectas === estacion.preguntas.length);

    // Si aprueba, guardamos la bandera en LocalStorage para que el menú principal muestre la medalla dorada
    if (aproboModulo) {
        localStorage.setItem(`estacion_${idEstacion}_aprobada`, "true");
    }

    // 4. Llamar a la función de la interfaz en app.html para pintar la pantalla de éxito o bucle de repetición
    mostrarPantallaResultado(aproboModulo, respuestasCorrectas, estacion.preguntas.length);
}