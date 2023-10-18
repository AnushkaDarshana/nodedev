function showLocalScope() {
    let localVariable = "I'm a local variable";
    console.log(localVariable); // Outputs: I'm a local variable
}

showLocalScope();
// console.log(localVariable);  
// Uncommenting this will throw an error because 
// localVariable is not accessible outside the function.