function fibonacci(n) {
    //Return n if it is less or equal to 1
    if (n <= 1) {
        return n;
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        //store b in temp to swap values of a and b
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
