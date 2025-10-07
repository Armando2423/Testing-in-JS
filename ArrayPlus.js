function ArrayElements(arr) {
    let plus = 0;
    for (let i = 0; i < arr.length; i++) {
        plus += arr[i];
    }
    return plus;
}

console.log(ArrayElements([1, 2, 3, 4, 5, 8]));