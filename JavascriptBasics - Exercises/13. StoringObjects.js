/*
 You will be given input lines, each holding information about a student: name, age and grade. The data come in the format like at the examples below.
 Extract that information from the input lines into JS objects.
 Print the objects in the order of appearance, in format like at the examples below.

 Examples
 Input	                        Output
 Pesho -> 13 -> 6.00            Name: Pesho
 Ivan -> 12 -> 5.57             Age: 13
 Toni -> 13 -> 4.90	            Grade: 6.00
                                Name: Ivan
                                Age: 12
                                Grade: 5.57
                                Name: Toni
                                Age: 13
                                Grade: 4.90
 */

function myFunction(arr) {
    let splittedData = arr.join(" -> ").split(" -> ");
    let people = [];

    for (let i = 0; i < splittedData.length; i += 3) {
        let person = {};
        person['Name'] = splittedData[i];
        person['Age'] = splittedData[i + 1];
        person['Grade'] = splittedData[i + 2];

        people.push(person);
    }

    for (let i = 0; i < people.length; i++) {
        Object.keys(people[i]).forEach(key => console.log(key + ": " + people[i][key]));
    }
}