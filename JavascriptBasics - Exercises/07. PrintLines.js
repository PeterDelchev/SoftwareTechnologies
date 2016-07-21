/*
 You will be, continuously, given input lines, until you receive the command “Stop”. Print each of those lines at the moment you read them, until you reach the ending command. Do NOT print the ending command.

 Examples
 Input	    Output		Input	    Output
 Line1      Line1       3           3
 Line2      Line2       6           6
 Line3      Line3       5           5
 Stop                   4           4
                        Stop
                        10
                        12
 */

function myFunction(arr) {
    let input = arr;
    let index = 0;

    while (index < input.length && input[index] !== "Stop") {
        console.log(input[index]);
        index++;
    }
}