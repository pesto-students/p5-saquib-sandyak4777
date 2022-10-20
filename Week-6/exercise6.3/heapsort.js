
const heapify = (arr, length, i) => {
    let largest = i
    const left = i * 2 + 1
    const right = left + 1
    if (left < length && arr[left] > arr[largest]) {
        largest = left
      }
    
      if (right < length && arr[right] > arr[largest]) {
        largest = right
      }
    
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapify(arr, length, largest)
      }
  
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

// console.log("Sorted array is \n", sortedArr)

// this has time complexity o(nlogn)
// where n is given as 10^6 so  o(10^6 log10^6)===> o(10^6)=> nothing but 0(n)
// where space complexity is o(1)


module.exports=heapSort