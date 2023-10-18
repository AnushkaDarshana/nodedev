let globalVariable = "I'm a global variable";

function showGlobalScope() {
    console.log(globalVariable); // Outputs: I'm a global variable
}

function modifyGlobalScope() {
    globalVariable = "I've been modified!";
    console.log(globalVariable); // Outputs: I've been modified!
}

showGlobalScope();
modifyGlobalScope();
console.log(globalVariable); // Outputs: I've been modified!