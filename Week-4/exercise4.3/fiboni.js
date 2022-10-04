// const myIterable = {};
const fiboni = (num) => ({
  [Symbol.iterator]: () => {
    let i = 1;
    let old = 0,
      new1 = 0;
    return {
      next: () => {
        if (i++ <= num) {
          [old, new1] = [new1, old + new1 || 1];
          return { value: old, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
});

console.log("series", [...fiboni(8)]);
//below are different methods to execute
// const series = [...fiboni(8)];
// console.log("The Fibonacci Series is ");
// for (let num of fiboni(9)) {
//   console.log(num);
// }
