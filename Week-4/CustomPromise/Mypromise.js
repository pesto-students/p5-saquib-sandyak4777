const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
  }

class MyPromise{
    #thenCallBacks= []
    #state= STATE.PENDING;
    #value 
    constructor(callbackCode){
        try{
            callbackCode(this.#onSuccess, this.#onFail)
        }catch(err){
            this.#onFail(e)
        }
    }

    #runCallBacks(){
    }

    #onSuccess(value){
        if(this.#state !== STATE.PENDING) return
        this.#value=value;
        this.#state=STATE.FULFILLED
        this.#runCallBacks()
    }
    #onFail(value){
        if(this.#state !== STATE.PENDING) return
        this.#value=value;
        this.#state=STATE.REJECTED
        this.#runCallBacks()
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