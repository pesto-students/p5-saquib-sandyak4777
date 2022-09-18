const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
  }

class MyPromise{
    #thenCallBacks= []
    #state= STATE.PENDING;
    constructor(callbackCode){
        try{
            callbackCode(this.#onSuccess, this.#onFail)
        }catch(err){
            this.#onFail(e)
        }
    }
    #onSuccess(value){
        this.#value=value;
        this.#state=STATE.FULFILLED
    }
    #onFail(value){
        this.#value=value;
        this.#state=STATE.REJECTED
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