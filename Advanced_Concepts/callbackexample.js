function performAsyncOperation(callback) {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue < 0.5) {
        // If the operation is successful, call the callback with a result
        callback(null, `Success! Random value: ${randomValue}`);
      } else {
        // If the operation fails, call the callback with an error
        callback(`Error! Random value: ${randomValue}`, null);
      }
    }, 1000); // Simulating a 1-second delay
  }
  
  // Using callbacks
  console.log('Performing an asynchronous operation...');
  performAsyncOperation((error, result) => {
    if (error) {
      console.error(error); // This block runs if there's an error
    } else {
      console.log(result); // This block runs if the operation is successful
    }
  });