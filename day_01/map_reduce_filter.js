"use strict"

var keys = [1, 2, 3, 4, 5, 6, 7]

//forloop
for (let i = 0; i < keys.length; i++) {
    keys[i] = keys[i] * 2;
}

console.log(keys);


var keys = [1, 2, 3, 4, 5, 6, 7]

//arrow
var mapFunc = (element) => {
    return element * 2;
}

var newMap = (func, array) => {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]));
    }
    return newArray
}

var newArray = keys.map((element) => {
    return element * 2;
});

console.log(keys);
console.log(newArray);


var keys = [1, 2, 3, 4, 5, 6, 7]

//Reducer
var companyObject = {
    "employees": [
        {
            "name": "emp1",
            "salary": 1000
        },
        {
            "name": "emp2",
            "salary": 500
        }
    ]
}

var newReducer = (func, array) => {
    var newValue = 0;
    for (var i = 0; i < array.length; i++) {
        newValue = func(array[i], newValue);
    }
    return newArray;
}

var sumSalary = newReducer((element, aggregatedValue) => {
    return aggregatedValue + element.salary;
}, companyObject.employees);

var sumSalary2 = companyObject.employees.reduce((element, aggregatedValue) => {
    return aggregatedValue + element.salary;
}, 0);

console.log(sumSalary);
console.log(sumSalary2);


//filter
var companyObject = {
    "employees": [
        {
            "name": "emp1",
            "salary": 1000
        },
        {
            "name": "emp2",
            "salary": 500
        },
        {
            "name": "emp3",
            "salary": 700
        },
        {
            "name": "emp4",
            "salary": 980
        }
    ]
}

var sumSalaryMoreThan1000 = 
companyObject.employees.filter((element) => element.salary > 1000).reduce((element, aggregatedValue) => {
    return aggregatedValue + element.salary;
}, 0)