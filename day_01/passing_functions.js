"use strict"

function calculator(paramA, paramB, func){
    return func(paramA, paramB);
}

console.log(calculator(5,7,(a, b) => a + b + 10));