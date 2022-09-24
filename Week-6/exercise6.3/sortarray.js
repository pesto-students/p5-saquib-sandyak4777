const array = [0, 1, 2, 0, 1, 2, 0, 0, 1, 2, 1, 0, 1, 2, 2];

// console.log(array.sort()) /// done by inbuilt function

///custom sorting by function
const sortByFunction = (length, array) => {
  for (i = 0; i < length; i++) {
    for (j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }

  return array;
};

const len = array.length;
const Result = sortByFunction(len, array);

console.log("array is sorted", Result);
