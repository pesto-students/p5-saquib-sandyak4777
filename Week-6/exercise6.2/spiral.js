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
            top+=1;
        }else if(direction==="down"){
            for(i=top;i<=bottom;i++){
                result.push(array[i][right])
            }
            direction="left";
            right-=1;
        }else if(direction==="left"){
            for(i=right;i>=left;i--){
                result.push(array[bottom][i])
            }
            direction="up";
            bottom-=1;
        } else if(direction=="up"){
            for(i=bottom;i>=top ;i--){
                result.push(array[i][left])
            }
            left+=1
            direction="right"
        }
    }
    return result
}


const spiralArrayResult = spiralArray(array);

console.log('spira;ArrayResult',spiralArrayResult)