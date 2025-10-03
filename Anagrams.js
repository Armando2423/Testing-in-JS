/* 
Anagramas
Escribe una función que determine si dos strings son anagramas.
👉 Dos palabras son anagramas si tienen las mismas letras con la misma frecuencia,
pero en diferente orden.
*/


function anagrams(stri1, string2) { 
    let letters = stri1.split("");
    let letters2 = string2.split("");

    if (letters.length !== letters2.length) return false;
    if (letters.length === 0) return true;
    if (letters.length === 1) return letters[0] === letters2[0];

    let lettersFrequency = letters.reduce((acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1;
        return acc;
    }, {});

    for (let letter of letters2) {
        if (lettersFrequency[letter] === undefined) return false;
        lettersFrequency[letter]--;
        if (lettersFrequency[letter] < 0) return false;
    }

    return true;
};

console.log(anagrams("ana", "lan"));
console.log(anagrams("ana", "lana"));
