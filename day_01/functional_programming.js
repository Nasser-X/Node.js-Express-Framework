//"use strict"

var funcA = function (input){
    return funcB(input, "Hello");
}

var funcB = function (input, funcAOut){
    return funcC(input, funcAOut + " ");
}

var funcC = function (input, funcBOut){
    return funcBOut + input;
}

console.log(funcA("Everyone!"));