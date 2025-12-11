window.alert("Adivina el número del 1 al 10. Tienes 3 intentos.");

const numeroSecreto = Math.floor(Math.random() * 10) + 1; 

const intentosAnteriores = []; 
let adivinado = false;

function revisarIntento(intentosAnteriores, numero) {
    if (intentosAnteriores.includes(numero)) {
        window.alert(`Ya has intentado el número ${numero}. Elige uno diferente.`);
        return false;
    }
    intentosAnteriores.push(numero);
    return true;
}

for (let i = 0; i < 3; i++) {
    let entradaValida = false; 
    let num;
    let contador = i + 1;

    while (!entradaValida) {
        num = parseFloat(prompt("Intento número " + contador + ":"));
        if (isNaN(num) || num < 1 || num > 10) {
            window.alert("Entrada inválida. Ingresa un número entre 1 y 10.");
        } else {
            entradaValida = true;
        }
    }

    if (revisarIntento(intentosAnteriores, num)) {
        
        if (num === numeroSecreto) {
            window.alert(`¡Has acertado! El número era ${numeroSecreto}.`);
            console.log("¡Ganaste!");
            adivinado = true;
            break;
        } else {
            window.alert(`No has acertado. Es tu intento número ${contador}.`);
            if (num > numeroSecreto) {
                 console.log("Pista: El número secreto es MENOR.");
            } else {
                 console.log("Pista: El número secreto es MAYOR.");
            }
        }
    } else {
        i--;
    }
}

if (!adivinado) {
    console.log("Se acabaron los intentos.");
    console.log(`El número secreto era: ${numeroSecreto}`);
    window.alert(`Se acabaron los intentos. El número era ${numeroSecreto}.`);
}
