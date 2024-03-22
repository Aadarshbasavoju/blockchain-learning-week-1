 //Simple example Using for and if loop
for (let i = 1; i <= 100; i++) {
    // In case, if the number is a multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // in case ,if the number is a multiple of 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // in case , if the number is a multiple of 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // print the number if it doesn't meet any of the conditions
    else {
        console.log(i);
    }
}