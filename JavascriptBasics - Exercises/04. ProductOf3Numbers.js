/*
 You are given a number X, Y and Z. Create a JS function that finds if X * Y * Z (the product) is negative or positive. Try to do this WITHOUT multiplying the 3 numbers.
 Examples
 Input	Output		Input	Output		Input	Output
 2      Negative    5       Positive    -3      Positive
 3                  4                   -4
 -1                 3                   5
 */

function func(arr) {
    let num = Number(arr[0]);
    let num2 = Number(arr[1]);
    let num3 = Number(arr[2]);
    let lessThanZero = 0;

    if (num < 0) {
        lessThanZero++;
    }

    if (num2 < 0) {
        lessThanZero++;
    }

    if (num3 < 0) {
        lessThanZero++;
    }

    if (num === 0 || num2 === 0 || num3 === 0) {
        return "Positive";
    }

    if (lessThanZero % 2 !== 0) {
        return "Negative";
    } else {
        return "Positive";
    }
}