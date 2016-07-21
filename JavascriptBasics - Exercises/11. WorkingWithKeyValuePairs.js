/*
 You will be given input lines, each holding two elements separated by a space. The first is the key and the second is the value. Your task is to store the value for each key. If a key already exists, you need to replace the old value with the new one. At the last line of input you will receive a key. You must print the value corresponding to that key. If there is no such, just print “None”.
 Examples
 Input	        Output		Input	        Output		Input	        Output
 key value      eulav       3 test          test5       3 bla           None
 key eulav                  3 test1                     3 alb
 test tset                  4 test2                     2
 key                        4 test3
                            4 test5
                            4
 */

function myFunction(arr) {
    let input = arr;
    let key = input[input.length - 1];
    input.pop();
    let value = "None";

    let result = input.join(" ").split(" ");

    for (let i = 0; i < result.length; i+= 2) {
        if(result[i] == key) {
            value = result[i + 1];
        }
    }

    console.log(value)
}