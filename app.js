window.alert("Ingresa los valores para a, b y c.");

const a = parseFloat(prompt("Valor a:"));
const b = parseFloat(prompt("Valor b:"));
const c = parseFloat(prompt("Valor c:"));

let resultado = disc(a, b, c);

function disc(a, b, c) {
  let discriminante = b * b - 4 * a * c;

  if (discriminante < 0) {
    return { 
      mensaje: "La ecuación no tiene soluciones reales.", 
      soluciones: [] 
    };
  } else if (discriminante === 0) {
    let solucion = -b / (2 * a);
    
    return { 
      mensaje: "Hay una única solución:", 
      soluciones: [solucion] 
    };

  } else {
    let solucion1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let solucion2 = (-b - Math.sqrt(discriminante)) / (2 * a); 
    
    return { 
      mensaje: "Hay dos soluciones:", 
      soluciones: [solucion1, solucion2] 
    };
  }
}

const resultadoElemento = document.getElementById("resultado");

if (resultadoElemento) {
  let textoFinal = resultado.mensaje;

  if (resultado.soluciones.length > 0) {
    textoFinal += " " + resultado.soluciones.join(" y ");
  }

<<<<<<< HEAD
if (!adivinado) {
    console.log("Se acabaron los intentos.");
    console.log(`El número secreto era: ${numeroSecreto}`);
    window.alert(`Se acabaron los intentos. El número era ${numeroSecreto}.`);
=======
  resultadoElemento.innerHTML = textoFinal;
} else {
    console.log("No se encontró el elemento con id='resultado' en el HTML.");
    alert(`Resultado del cálculo: ${resultado.mensaje}. Soluciones: ${resultado.soluciones.join(' y ')}`);
>>>>>>> 7d83f2b1c2b9d88373921a553426f4078942e9b5
}