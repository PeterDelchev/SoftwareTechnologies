/*
 You are given a sequence of JSON strings holding town + income:
 {"town":"Sofia","income":200}
 {"town":"Varna","income":120}
 {"town":"Pleven","income":60}
 {"town":"Varna","income":70}
 Write a JS function to sum and print the incomes for each town:
 Pleven -> 60
 Sofia -> 200
 Varna -> 190
 */

function myFunction(arr) {
    let objects = arr.map(JSON.parse);
    let sumOfObjects = {};

    for (let obj of objects) {
        if (obj.town in sumOfObjects) {
            sumOfObjects[obj.town] += obj.income;
        } else {
            sumOfObjects[obj.town] = obj.income;
        }
    }

    let towns = Object.keys(sumOfObjects).sort();

    for (let town of towns) {
        console.log(town + " -> " + sumOfObjects[town]);
    }
}
