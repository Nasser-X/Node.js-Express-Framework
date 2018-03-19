var test = "xyz";
console.log(typeof (test));

test = 123;
console.log(typeof (test));

//test = func;

if (typeof (test) === "number") {
    console.log("It's a number.")
} else {
    console.log("Wrong.");
}