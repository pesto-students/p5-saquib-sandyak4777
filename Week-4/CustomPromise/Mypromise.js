const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
  }

class MyPromise{
    #thenCallBacks= []
    constructor(callbackCode){
        try{
            callbackCode(this.#onSuccess, this.#onFail)
        }catch(err){
            this.#onFail(e)
        }
    }
    #onSuccess(value){

    }
    #onFail(value){

    }

    then(callbackCode){
        this.#thenCallBacks.push(callbackCode)
    }
}


module.exports= MyPromise



const p = new Promise();

p.then(()=>{

}).catch(()=>{

})