//Solving by custom
// imported my custom promise
const customPromise = require("./Mypromise");

const getNumber = () => parseInt(Math.random() * 100, 10);

const customPromiseUsed = new customPromise((resolve, reject) => {
  const num = getNumber();
  if (num % 5 === 0) {
    reject(`The number is failure ${num}`);
  } else {
    resolve(`the number is success ${num}`);
  }
});

customPromiseUsed
  .then((result) => {
    console.log("success", result);
  })
  .catch((err) => {
    console.log(err);
  });
