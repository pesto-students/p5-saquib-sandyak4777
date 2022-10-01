function findPair(arr, size, n) {
    // Initialize positions of two elements
    let i = 0;
    let j = 1;

    while (i < size && j < size) {
        if (i != j && arr[j] - arr[i] == n) {
            console.log("pair of values",arr[i],arr[j]);
            return 1;
        }
        else if (arr[j] - arr[i] < n)
            j++;
        else
            i++;
    }
    return 0;
}


let arr = [1, 8, 30, 40, 100];
let size = arr.length;
let n = -22;
const result=findPair(arr, size, n);
console.log("result",result);