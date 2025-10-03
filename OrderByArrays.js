/* 
Dada una lista de estudiantes con su nombre y calificación, escribe una función que:

Devuelva un nuevo array con los estudiantes ordenados de mayor a menor calificación.

Si dos estudiantes tienen la misma calificación, ordénalos alfabéticamente por nombre.

RESULTADO ESPERADO:
[
  { name: "Ana", grade: 90 },
  { name: "Pedro", grade: 90 },
  { name: "Luis", grade: 85 },
  { name: "Maria", grade: 70 }
]

*/


const students = [
    { name: "Ana", grade: 90 },
    { name: "Luis", grade: 85 },
    { name: "Pedro", grade: 90 },
    { name: "Maria", grade: 70 }
];

function orderByGrade(students) {
    return students.sort((a, b) => {
        if (a.grade === b.grade) return b.grade - a.grade;

        return a.name.localeCompare(b.name);
    });
}

console.log(orderByGrade(students));