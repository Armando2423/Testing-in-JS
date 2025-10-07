const person = {
    name: "Pepe",
    nickname: "Estepede",
    saludar: function() {
        return "Ya llego el Pendejo de:" + " " + this.name + " " + this.nickname;
    }
}
// Como es un metodo que tiene adentro la funcion 'saludar'
console.log(person.saludar());