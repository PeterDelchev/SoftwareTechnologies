/*
 You are given a number N and a number X. Create a JS function that:
 •	Multiplies N * X if X is greater than or equal to N
 •	Divides N / X if N is greater than X
 The input comes as array of strings.
 Examples
 Input	Output		Input	Output		Input	Output		Input	Output
 2      6           13      169         3       1.5         144     12
 3                  13                          2           12
 */

function func(arr) {
    let num = parseFloat(arr[0]);
    let num2 = parseFloat(arr[1]);

    if (num <= num2) {
        return num * num2;
    } else {
        return num / num2;
    }
}