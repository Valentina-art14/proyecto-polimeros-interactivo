"use strict";
// Preguntas transcritas del cuestionario académico original.
const preguntas = [
  {
    "pregunta": "¿Qué son los polímeros?",
    "opciones": [
      "Materiales formados por moléculas pequeñas independientes.",
      "Macromoléculas formadas por unidades químicas repetidas.",
      "Elementos químicos que se encuentran en la naturaleza.",
      "Sustancias compuestas únicamente por metales."
    ],
    "correcta": 1
  },
  {
    "pregunta": "¿Cómo se llaman las moléculas pequeñas que forman los polímeros?",
    "opciones": [
      "Monómeros.",
      "Isótopos.",
      "Electrones.",
      "Cristales."
    ],
    "correcta": 0
  },
  {
    "pregunta": "¿Qué nombre recibe el proceso químico mediante el cual se unen los monómeros?",
    "opciones": [
      "Evaporación.",
      "Cristalización.",
      "Polimerización.",
      "Combustión."
    ],
    "correcta": 2
  },
  {
    "pregunta": "¿Cuál es el monómero utilizado para obtener el polietileno?",
    "opciones": [
      "Propileno.",
      "Etileno.",
      "Cloruro de sodio.",
      "Silicona."
    ],
    "correcta": 1
  },
  {
    "pregunta": "¿Cuáles son las tres estructuras principales de los polímeros?",
    "opciones": [
      "Rígida, flexible y líquida.",
      "Natural, artificial y sintética.",
      "Simple, doble y triple.",
      "Lineal, ramificada y entrecruzada."
    ],
    "correcta": 3
  },
  {
    "pregunta": "¿Qué caracteriza a los termoplásticos?",
    "opciones": [
      "Se ablandan al calentarse y se endurecen al enfriarse.",
      "No pueden cambiar su forma mediante calor.",
      "Siempre recuperan su forma después de estirarse.",
      "Se descomponen inmediatamente al calentarse."
    ],
    "correcta": 0
  },
  {
    "pregunta": "¿Cuál de los siguientes materiales es un ejemplo de termoplástico?",
    "opciones": [
      "Baquelita.",
      "Resina epóxica.",
      "Polietileno.",
      "Caucho natural."
    ],
    "correcta": 2
  },
  {
    "pregunta": "¿Qué caracteriza a los polímeros termoestables?",
    "opciones": [
      "Pueden fundirse y moldearse repetidamente.",
      "Después del curado adquieren una estructura rígida que no permite volver a fundirlos para moldearlos.",
      "Se estiran y recuperan su forma original.",
      "Se utilizan exclusivamente para fabricar textiles."
    ],
    "correcta": 1
  },
  {
    "pregunta": "¿Cuál de los siguientes es un ejemplo de elastómero?",
    "opciones": [
      "PVC.",
      "PET.",
      "Baquelita.",
      "Neopreno."
    ],
    "correcta": 3
  },
  {
    "pregunta": "¿Qué propiedad permite que algunos polímeros sean livianos y fáciles de transportar?",
    "opciones": [
      "Baja densidad.",
      "Alta conductividad eléctrica.",
      "Elevada fragilidad.",
      "Alta temperatura de fusión."
    ],
    "correcta": 0
  },
  {
    "pregunta": "¿Qué propiedad permite que muchos polímeros no conduzcan fácilmente la electricidad?",
    "opciones": [
      "Flexibilidad.",
      "Resistencia mecánica.",
      "Aislamiento eléctrico.",
      "Dureza."
    ],
    "correcta": 2
  },
  {
    "pregunta": "¿En qué consiste el proceso industrial de extrusión?",
    "opciones": [
      "Introducir aire comprimido para formar objetos huecos.",
      "Hacer pasar el polímero fundido por un dado para obtener una forma continua.",
      "Introducir material fundido en un molde cerrado para fabricar piezas individuales.",
      "Unir monómeros mediante una reacción química."
    ],
    "correcta": 1
  },
  {
    "pregunta": "¿Cuál es un producto obtenido mediante extrusión?",
    "opciones": [
      "Juguetes moldeados individualmente.",
      "Botellas huecas.",
      "Jeringas moldeadas.",
      "Tuberías."
    ],
    "correcta": 3
  },
  {
    "pregunta": "¿En qué consiste el moldeo por inyección?",
    "opciones": [
      "Introducir el polímero fundido a presión dentro de un molde cerrado.",
      "Expandir el material con aire comprimido.",
      "Hacer pasar el material por un dado de forma continua.",
      "Triturar el plástico para convertirlo en polvo."
    ],
    "correcta": 0
  },
  {
    "pregunta": "¿Qué elemento se utiliza en el moldeo por soplado para expandir el material?",
    "opciones": [
      "Agua caliente.",
      "Un tornillo giratorio.",
      "Aire comprimido.",
      "Un dado de extrusión."
    ],
    "correcta": 2
  },
  {
    "pregunta": "¿Cuál es una aplicación de los polímeros en la industria automotriz?",
    "opciones": [
      "Fabricación de medicamentos.",
      "Fabricación de tableros y parachoques.",
      "Producción de fertilizantes.",
      "Extracción de minerales."
    ],
    "correcta": 1
  },
  {
    "pregunta": "¿Qué permite calcular el grado de polimerización?",
    "opciones": [
      "La cantidad de calor que necesita un polímero.",
      "La velocidad de enfriamiento del material.",
      "La cantidad de productos fabricados por hora.",
      "El número de unidades repetitivas de una cadena polimérica."
    ],
    "correcta": 3
  },
  {
    "pregunta": "Una máquina procesa 120 kg de polímero por hora durante 8 horas. ¿Cuánto material procesa en total?",
    "opciones": [
      "960 kg.",
      "840 kg.",
      "1.200 kg.",
      "9.600 kg."
    ],
    "correcta": 0
  },
  {
    "pregunta": "¿Cuál es el orden correcto de las etapas del reciclaje mecánico descritas en la guía?",
    "opciones": [
      "Lavado, recolección, secado, clasificación y trituración.",
      "Recolección, trituración, clasificación, fundición y lavado.",
      "Recolección, clasificación, lavado, trituración, secado y fundición y extrusión.",
      "Clasificación, fundición, recolección, lavado y secado."
    ],
    "correcta": 2
  },
  {
    "pregunta": "¿Por qué los termoplásticos suelen ser más adecuados para el reciclaje mecánico?",
    "opciones": [
      "Porque nunca pierden sus propiedades.",
      "Porque pueden volver a fundirse y moldearse.",
      "Porque no necesitan clasificación.",
      "Porque se convierten naturalmente en materia orgánica."
    ],
    "correcta": 1
  }
];

const quiz = document.getElementById("quiz");
let respuestas = Array(preguntas.length).fill(null);
let pagina = 0;
let finalizado = false;
const escapeHTML = texto => String(texto).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function dibujar() {
  if (!quiz) return;
  if (finalizado) return mostrarResultados();
  const item = preguntas[pagina];
  const contestadas = respuestas.filter(x => x !== null).length;
  quiz.innerHTML = `
    <div class="quiz-top"><span>Pregunta ${pagina + 1} de ${preguntas.length}</span><span>${contestadas} respondidas</span></div>
    <div class="barra"><div style="width:${contestadas / preguntas.length * 100}%"></div></div>
    <fieldset class="pregunta"><legend>${escapeHTML(item.pregunta)}</legend>
    ${item.opciones.map((op, i) => `<label class="opcion ${respuestas[pagina] === i ? 'seleccionada' : ''}">
      <input type="radio" name="respuesta" value="${i}" ${respuestas[pagina] === i ? 'checked' : ''}>
      <span class="letra">${'ABCD'[i]}</span><span>${escapeHTML(op)}</span></label>`).join('')}
    </fieldset>
    <div class="quiz-botones"><button type="button" id="anterior" class="boton secundario" ${pagina === 0 ? 'disabled' : ''}>Anterior</button>
    ${pagina === preguntas.length - 1 ? '<button type="button" id="terminar" class="boton">Calificar cuestionario</button>' : '<button type="button" id="siguiente" class="boton">Siguiente</button>'}</div>
    <p class="quiz-ayuda">Puedes regresar a preguntas anteriores para cambiar tus respuestas.</p>`;
  quiz.querySelectorAll('input[name="respuesta"]').forEach(input => input.addEventListener('change', e => {respuestas[pagina] = Number(e.target.value); dibujar();}));
  quiz.querySelector('#anterior')?.addEventListener('click', () => {pagina--; dibujar();});
  quiz.querySelector('#siguiente')?.addEventListener('click', () => {pagina++; dibujar();});
  quiz.querySelector('#terminar')?.addEventListener('click', () => {
    const sinResponder = respuestas.filter(r => r === null).length;
    if (sinResponder && !window.confirm(`Faltan ${sinResponder} preguntas por responder. ¿Quieres calificar de todos modos?`)) return;
    finalizado = true; dibujar();
  });
}
function mostrarResultados() {
  const correctas = preguntas.filter((p, i) => respuestas[i] === p.correcta).length;
  const pct = Math.round(100 * correctas / preguntas.length);
  quiz.innerHTML = `<div class="resultado"><p class="etiqueta">RESULTADO FINAL</p><h3>${correctas} / ${preguntas.length} respuestas correctas</h3><p class="nota">${pct}% de aciertos</p><p>Revisa tus respuestas a continuación.</p>
  <button class="boton" id="reiniciar" type="button">Volver a intentarlo</button></div>
  <div class="revision">${preguntas.map((p,i) => `<article class="revision-item ${respuestas[i] === p.correcta ? 'acierto' : 'error'}">
    <h4>${i+1}. ${escapeHTML(p.pregunta)}</h4>
    <p>Tu respuesta: ${respuestas[i] === null ? 'Sin responder' : escapeHTML('ABCD'[respuestas[i]] + '. ' + p.opciones[respuestas[i]])}</p>
    <p><strong>Respuesta correcta:</strong> ${escapeHTML('ABCD'[p.correcta] + '. ' + p.opciones[p.correcta])}</p>
  </article>`).join('')}</div>`;
  quiz.querySelector('#reiniciar').addEventListener('click', () => {respuestas = Array(preguntas.length).fill(null); pagina=0; finalizado=false; dibujar();});
}
dibujar();


// Laboratorio: contenidos adaptados de los capítulos 2, 4 y 5 de la guía original.
const materiales = {
 pe:{nombre:'Polietileno (PE)',clase:'Termoplástico',propiedad:'Ligero, flexible y resistente a la humedad.',uso:'Bolsas, envases y tuberías.'},
 pp:{nombre:'Polipropileno (PP)',clase:'Termoplástico',propiedad:'Ligero y resistente a numerosos agentes químicos.',uso:'Recipientes, empaques y piezas automotrices.'},
 pvc:{nombre:'Policloruro de vinilo (PVC)',clase:'Termoplástico',propiedad:'Resistente y versátil; sus propiedades dependen de su formulación.',uso:'Tuberías, cables y perfiles.'},
 pet:{nombre:'Polietilentereftalato (PET)',clase:'Termoplástico',propiedad:'Buenas propiedades mecánicas y transparencia en aplicaciones habituales.',uso:'Botellas y fibras textiles.'},
 abs:{nombre:'ABS',clase:'Copolímero termoplástico',propiedad:'Buena resistencia al impacto.',uso:'Carcasas, juguetes y componentes industriales.'}
};
const procesos = {
 extrusion:{nombre:'Extrusión',pasos:'El material se calienta, se hace pasar por un dado y se enfría para conservar una sección continua.',ejemplo:'Producto habitual: tuberías y perfiles.'},
 inyeccion:{nombre:'Moldeo por inyección',pasos:'El polímero fundido se introduce a presión en un molde cerrado; después se enfría y se extrae la pieza.',ejemplo:'Producto habitual: carcasas y piezas individuales.'},
 soplado:{nombre:'Moldeo por soplado',pasos:'El material caliente se expande mediante aire dentro de un molde para producir objetos huecos.',ejemplo:'Producto habitual: botellas y recipientes.'}
};
function elegirMaterial(id){const m=materiales[id];if(!m)return;document.querySelectorAll('[data-material]').forEach(b=>{b.classList.toggle('activo',b.dataset.material===id);b.setAttribute('aria-pressed',String(b.dataset.material===id));});document.getElementById('material-resultado').innerHTML=`<span class="lab-tag">${m.clase}</span><h4>${m.nombre}</h4><p><strong>Características:</strong> ${m.propiedad}</p><p><strong>Aplicaciones:</strong> ${m.uso}</p>`;}
function elegirProceso(id){const m=procesos[id];if(!m)return;document.querySelectorAll('[data-proceso]').forEach(b=>{b.classList.toggle('activo',b.dataset.proceso===id);b.setAttribute('aria-pressed',String(b.dataset.proceso===id));});document.getElementById('proceso-resultado').innerHTML=`<span class="lab-tag">PROCESO DE TRANSFORMACIÓN</span><h4>${m.nombre}</h4><p>${m.pasos}</p><p><strong>${m.ejemplo}</strong></p>`;}
document.querySelectorAll('[data-material]').forEach(b=>b.addEventListener('click',()=>elegirMaterial(b.dataset.material)));
document.querySelectorAll('[data-proceso]').forEach(b=>b.addEventListener('click',()=>elegirProceso(b.dataset.proceso)));
elegirMaterial('pe'); elegirProceso('extrusion');
document.getElementById('form-produccion')?.addEventListener('submit',e=>{e.preventDefault();const kg=Number(document.getElementById('produccion-hora').value),h=Number(document.getElementById('horas-trabajo').value);if(!Number.isFinite(kg)||!Number.isFinite(h)||kg<0||h<0)return;const fmt=n=>n.toLocaleString('es-CO',{maximumFractionDigits:2});document.getElementById('produccion-resultado').innerHTML=`${fmt(kg)} kg/h × ${fmt(h)} h = <strong>${fmt(kg*h)} kg</strong>`;});
