const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue < 0.5) {
        // If the operation is successful, resolve the promise with a result
        resolve(`Success! Random value: ${randomValue}`);
      } else {
        // If the operation fails, reject the promise with an error
        reject(`Error! Random value: ${randomValue}`);
      }
    }, 1000); // Simulating a 1-second delay
  });
  
  // Using the Promise
  myPromise
    .then((result) => {
      console.log(result); // This block runs if the promise is resolved
    })
    .catch((error) => {
      console.error(error); // This block runs if the promise is rejected
    });
  
  console.log('Promise created. Waiting for it to resolve or reject...');