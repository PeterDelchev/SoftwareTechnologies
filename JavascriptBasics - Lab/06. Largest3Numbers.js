/*
 Write a program to read an array of numbers and find and print the largest 3 of them:
 10  ->  50     20  ->  30      10  ->  20
 30      30     30      20      5       20
 15      20                     20      10
 20                             3
 50                             20
 5
 */

function myFunction(arr) {
    let numbers = arr.map(Number);
    let length = Math.min(3, arr.length);

    let sortedNumbers = numbers.sort((a, b) => b - a);

    for(let i = 0; i < length; i++) {
        console.log(sortedNumbers[i]);
    }
}