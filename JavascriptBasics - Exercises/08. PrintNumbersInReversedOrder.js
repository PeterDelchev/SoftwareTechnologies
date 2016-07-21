/*
 You will be given a few numbers as input. You need to print them in backward order, each on a new line.

 Examples
 Input	Output		Input	Output		Input	Output
 10     20          5       -3          20      20
 15     15          5.5     24          1       1
 20	    10          24      5.5         20      20
                    -3      5           1       1
                                        20      20
 */

function myFunction(arr) {
    let numbers = arr.map(Number);

    numbers.reverse().forEach(a => console.log(a));
}