/*
 You will be given input lines, each holding two elements separated by a space: key and value. You need to store the given values to the given keys. At the last line of the input you will receive a key. You must print all the values corresponding to that key. If there are no such, just print “None”.

 Examples
 Input	        Output		Input	    Output		Input	        Output
 key value      value       3 test      test2       3 bla           None
 key eulav      eulav       3 test1     test3       3 alb
 test tset                  4 test2     test5       2
 key                        4 test3
                            4 test5
                            4
 */

function myFunction(arr) {
    let input = arr;
    let key = input[input.length - 1];
    input.pop();
    let isPrinter = false;

    let result = input.join(" ").split(" ");

    for (let i = 0; i < result.length; i+= 2) {
        if(result[i] == key) {
            console.log(result[i + 1]);
            isPrinter = true;
        }
    }

    if (!isPrinter) {
        console.log("None")
    }
}