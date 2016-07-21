/*
 You will be given input lines (text) holding object data in JSON format. Use the JSON.parse(str) function to parse the data into JavaScript objects, and then print them as shown in the examples.

 Examples
 Input	                                                Output
 {"name":"Gosho","age":10,"date":"19/06/2005"}          Name: Gosho
 {"name":"Tosho","age":11,"date":"04/04/2005"}	        Age: 10
                                                        Date: 19/06/2005
                                                        Name: Tosho
                                                        Age: 11
                                                        Date: 04/04/2005
*/

function myFunction(arr) {
    let objects = arr.map(JSON.parse);

    for (let obj of objects) {
        Object.keys(obj).forEach(key => console.log(capitalizeFirstLetter(key) + ": " + obj[key]));
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}