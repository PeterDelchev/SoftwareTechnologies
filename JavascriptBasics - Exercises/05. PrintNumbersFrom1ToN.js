/*
 You are given a number N. Create a JS function that loops through all of the numbers from 1 to N and prints them. N will always be positive.
 Examples
 Input	Output		Input	Output
 5	    1           2       1
        2                   2
        3
        4
        5
 */

function myFunction(arr) {
    let n = arr.map(Number);

    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}