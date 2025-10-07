const deleteDuplicates = arr => [...new Set(arr)].sort((a, b) => a - b);
console.log(deleteDuplicates([1, 2000, 2, 50, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));