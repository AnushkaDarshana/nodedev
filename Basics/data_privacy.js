function createCounter() {
    let count = 0; // This is a private variable

    // We return an increment function
    return function increment() {
        count++;
        return count;
    };
}

// Get the increment function with access to the 'count' variable
let counter = createCounter();

console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2