let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


const spiralArray = (array) =>{
    let left=0;
    let top=0;
    const result = [];
    let right =array[0].length-1;//3-1=2//column
    let bottom= array.length-1;//3-1=2//row
    let direction='right';

    while(left<=right && top<=bottom){
        if(direction==="right"){
            for(i=left; i<=right; i++){
                result.push(array[top][i]);
            }
            direction="down";
            top=+1;
        }else if(direction==="down"){
            for(i=top;i<=bottom;i++){
                result.push(array[i][right])
            }
        }
    }
    return result
}


console.log(spiralArray(array));