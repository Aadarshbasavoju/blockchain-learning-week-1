function calculateFactorial(num) {
    // Check if the number is negative
    if (num < 0) {
        return "You have entered a negative number";
    }
    
    // factorial of 0 is 1
    if (num === 0) {
        return 1;
    }

    // calculate factorial
    return num * calculateFactorial(num - 1);
}

console.log(calculateFactorial(5)); // Output: 120
console.log(calculateFactorial(0)); // Output: 1
console.log(calculateFactorial(-3)); // Output : "You have entered negative number"
