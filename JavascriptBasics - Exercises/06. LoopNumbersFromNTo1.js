/*
 You are given a number N. Create a JS function that loops through all of the numbers from N to 1 and prints them. N will always be positive.
 Examples
 Input	Output		Input	Output
 5	    5           2       2
        4                   1
        3
        2
        1
 */

function myFunction(arr) {
    let n = Number(arr);

    for(let i = n; i > 0; i--) {
        console.log(i);
    }
}