/*
 You will be given N – an integer specifying the length of an array. Then you will start receiving an index and a value. For each received line you must set the value at the given index to the given value. When you’ve processed all input data, print the array’s elements each on a new line.

 Examples
 Input	    Output		Input	    Output		Input	    Output
 3          5           2           7           5           3
 0 - 5      6           0 - 5       0           0 - 3       0
 1 – 6      7           0 - 6                   3 - -1      0
 2 – 7                  0 - 7                   4 - 2       -1
                                                            2
 */

function myFunction(arr) {
    let input = arr;
    let length = Number(input[0]);
    let result = Array(length).fill(0);

    for (let i = 1; i <= input.length - 1; i++) {
        let currentLine = input[i].split(" - ");
        let index = currentLine[0];
        let value = currentLine[1];

        if (index >= length) {
            continue;
        }

        result[index] = value;
    }

    console.log(result.join("\n"));
}