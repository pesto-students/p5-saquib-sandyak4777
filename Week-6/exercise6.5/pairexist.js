const a = [10, 12, -30, 15, 30, 60, 70];
const b = 40;

const checkIfPairExist = (arr, valueTobeChecked) => {
  if (!arr.length) {
    return 0;
  }
  for (i = 0; i < arr.length; i++) {
    let j = i;
    while (j <= arr.length - 1) {
      if (a[i] - a[j] == valueTobeChecked) {
        console.log("pair of values",arr[i],arr[j]);
        return 1;
      }
      j++;
    }
  }
};

const result = checkIfPairExist(a, b);

console.log("result", result);

//result 1
//pair of values 10 , -30