const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
  }

class MyPromise{
    #thenCallBacks= [];
    #catchCallBacks=[];
    #state= STATE.PENDING;
    #value 
    #onSuccessBind = this.#onSuccess.bind(this)
    #onFailBind = this.#onFail.bind(this)
    constructor(callbackCode){
        try{
            callbackCode(this.#onSuccessBind, this.#onFailBind)
        }catch(err){
            this.#onFail(e)
        }
    }

    #runCallBacks(){
        if(this.#state === STATE.FULFILLED){
            this.#thenCallBacks.forEach((callback)=>{
                callback(this.#value)
            })
            this.#thenCallBacks=[]
        }
        if(this.#state === STATE.REJECTED){
            this.#catchCallBacks.forEach((callback)=>{
                callback(this.#value)
            })
            this.#catchCallBacks=[]
        }
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

    then(thenCallBack,catchCallBack){
        if(thenCallBack !== null) this.#thenCallBacks.push(this.#thenCallBack) ;
        if(catchCallBack !== null) this.#catchCallBacks.push(this.#catchCallBack) 
        // this.#thenCallBacks.push(callbackCode)

        this.#runCallBacks()
    }
    catch(callbackCode){
        this.then(undefined,callbackCode)
    }
    finally(callbackCode){

    }
}


module.exports= MyPromise



const p = new Promise();

p.then(()=>{

}).catch(()=>{

})

p.then(()=>{

},()=>{})