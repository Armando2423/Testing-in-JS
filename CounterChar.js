/* 
Escribe una función que reciba un string y devuelva el carácter más repetido
 junto con cuántas veces aparece.
 */


function conunterLetters(striNg) {
    let counter = {}; // Creamos un objeto vacío
    for (let cadena of striNg) { // Iteramos sobre el string
// Si el carácter no existe en el objeto, lo agregamos con un valor de 0
        counter[cadena] = (counter[cadena] || 0) + 1
    };
 
    let MarChar = null; // Inicializamos con null
    let MaxCount = 0; // Inicializamos con 0

    for (let cadena in counter) {  // Iteramos sobre el objeto
        if (counter[cadena] > MaxCount) { // Si el valor de la cadena es mayor que el máximo
            MarChar = cadena;  // Lo guardamos como el carácter más repetido
            MaxCount = counter[cadena]; // Y su valor
        }
    }
    return { Char: MarChar, Count: MaxCount }; // Devolvemos el carácter más repetido y su valor
};

console.log(conunterLetters("aaaaAAAAddddDDDeeeLLLmmmXXXXXXXXX"));