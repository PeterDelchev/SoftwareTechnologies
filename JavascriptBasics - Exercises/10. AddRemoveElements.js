/*
 You will be given a sequence of commands (pairs of elements separated by a space): command and argument. You start by an empty array.
 •	The command “add number” appends the number to the array.
 •	The command “remove index” removes the element at the specified index. If the index is nonexistent, ignore that input line. When an element is deleted, all elements on the right from it, go one position left.
 When you process all input data, print the array’s elements each on a separate line.

 Examples
 Input	    Output		Input	    Output		Input	    Output
 add 3      3           add 3       3           add 3       5
 add 5      5           add 5       2           add 5       7
 add 7      7           remove 1                remove 2
                        add 2                   remove 0
                                                add 7
 */

function myFunction(arr) {
    let result = [];
    let currentIndex = 0;

    while (currentIndex < arr.length) {
        let currentLine = arr[currentIndex].split(" ");
        let command = currentLine[0];
        let number = Number(currentLine[1]);

        switch (command) {
            case "add":
                result.push(number);
                break;
            case "remove":
                if (result[number] !== undefined) {
                    result.splice(number, 1);
                }

                let temp = [];
                let length = result.length;

                for(let i = 0; i < length; i++) {
                    temp[i] = result.shift();
                }

                result = temp;

                break;
        }

        currentIndex++;
    }

    console.log(result.join("\n"));
}