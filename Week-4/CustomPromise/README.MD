defining promise and its skelleton or structure


The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.




Promise structure

const promise = new Promise((resolve, reject) => {
   /*
     our code logic goes here and you call  resolve(value)
     or reject(error) to resolve or reject the promise
   */ 
})

promise.then((value) => {
   // Our  Code logic on success of an operation
}).catch(error => {
  // Our Code logic on failure of an operation
}).finally(() => {
  // Our Code logic to be executed after completion of operation
})