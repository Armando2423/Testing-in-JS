
saludar1(); // TRUE

function saludar1() {
    return console.log("En 'function() {...}' se ejecuta antes o despues de la llamada a la función");
};

saludar1(); // TRUE


// saludar2(); // FALSE
const saludar2 = () => {
    return console.log("En 'const saludar = () => {...}' NO SE PUEDE EJECUTAR ANTES DE LA LLAMADA A LA FUNCIÓN");
};

saludar2(); // TRUE

function dd(){
    set
}
