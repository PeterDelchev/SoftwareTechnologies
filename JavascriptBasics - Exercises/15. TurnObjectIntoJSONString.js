/*
 You will be given input lines holding information about an object in format key -> value. Create a JS object and save these keys and values in it. After you’ve processed all of the input data, print the JSON version of the object. Use the JSON.stringify(obj) function.

 Examples
 Input	                    Output
 name -> Angel              {"name":"Angel","surname":"Georgiev","age":20,"grade":6,"date":"19/05/1995","town":"Sofia"}
 surname -> Georgiev
 age -> 20
 grade -> 6.00
 date -> 23/05/1995
 town -> Sofia
 */

function myFunction(arr) {
    let object = {};

    for (let i = 0; i < arr.length; i++) {
        let keyValuePairs = arr[i].split("->");
        keyValuePairs[0] = keyValuePairs[0].trim();
        keyValuePairs[1] = keyValuePairs[1].trim();

        if (!isNaN(keyValuePairs[1])) {
            object[keyValuePairs[0]] = Math.round(keyValuePairs[1]);
        } else {
            object[keyValuePairs[0]] = keyValuePairs[1];
        }
    }

    console.log(JSON.stringify(object));
}