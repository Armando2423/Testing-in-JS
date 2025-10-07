/* const numbers = [1, 2, 25, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const witoutDuplicates = numbers.filter(( value, i ) => numbers.indexOf(value) === i);


const order = witoutDuplicates.sort((a, b) => b - a);
 */
function deleteDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
        newArr.sort((a, b) => a - b);
    }
    return newArr;
}

console.log(deleteDuplicates([1, 1000, 2, 25, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));