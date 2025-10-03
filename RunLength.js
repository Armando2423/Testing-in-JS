/* ENCUENTRA Y ENNUMERA EL CARACTER, CON SUS REPETICIONES EN EL STRING
 */

const string = "aaaWWWWaAAAAddddDDDeeeLLLmmm";

// Se le conoce como algoritmo fibunnaci
function countLetters(inputVal) {
    // Inicializamos con un contador, para saber cuántos veces aparece el carácter más repetido
    let counter = 0; 
    // Lo inicializamos con un array vacío
    let result = [];
    for (let i = 0; i < inputVal.length; i++) { // Iteramos sobre el string
        const currentCounter = inputVal[i]; // Obtenemos el carácter actual
        const textByLetter = inputVal[i + 1]; // Voy recoriendo el siguiente carácter
        // Comprueba si el caracter es igual o distinto al siguiente
        if (currentCounter !== textByLetter) {

            result.push([currentCounter, counter]); // Si es distinto, lo agregamos al array por eso la funcion PUSH
            counter = 1; // Y reseteamos el contador
        } else {
            counter++; // Si es igual, incrementamos el contador
        }
    }
    return result; // Devolvemos el array
}

console.log(countLetters(string));