
const heapify = (arr, length, i) => {
    let largest = i
    const left = i * 2 + 1
    const right = left + 1
  
  
    return arr
  }

 const heapSort = arr => {
    const length = arr.length
    let i = Math.floor(length / 2 - 1)
    let k = length - 1
    while (i >= 0) {
        heapify(arr, length, i)
        i--
      }
    
      while (k >= 0) {
        [arr[0], arr[k]] = [arr[k], arr[0]]
        heapify(arr, k, 0)
        k--
      }
  
    return arr
  }

const arr = [0,0,1,2,2,2,2,1,1,1,1,0,0,0,0,0,1,2,1,3,4,2,1,3,4,0,1,2];
sortedArr = heapSort(arr);

console.log("Sorted array is \n", sortedArr)