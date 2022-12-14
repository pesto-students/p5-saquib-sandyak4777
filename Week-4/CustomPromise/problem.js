// solving by using inbuilt promise

const getNumber = () =>{
    const randomNum = parseInt(Math.random()*100,10);
    return randomNum
}

const inbuiltPromise = new Promise((resolve,reject)=>{
    const num=getNumber();
    if(num%5===0){
                reject(`The number is failure ${num}`)
    }else{
        resolve(`the number is success ${num}`);
    }
})

inbuiltPromise.then((result)=>{
    console.log('success',result)
}).catch((err)=>{
    console.log(err)
})

