function outerFunction() {
    let outerVariable = 'I am an outer variable';

    function innerFunction() {
        console.log(outerVariable); // innerFunction can access outerVariable
    }

    return innerFunction;
}

let myClosure = outerFunction(); // Returns the innerFunction
myClosure(); // Outputs: 'I am an outer variable'