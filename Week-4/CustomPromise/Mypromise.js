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
        queueMicrotask(()=>{
            if(this.#state !== STATE.PENDING) return

        if(value instanceof MyPromise){
            value.then(this.#onSuccessBind,this.#onFailBind)
            return
        }
        this.#value=value;
        this.#state=STATE.FULFILLED
        this.#runCallBacks()
        })
    }
    #onFail(value){
        queueMicrotask(()=>{
            if(this.#state !== STATE.PENDING) return

        if(value instanceof MyPromise){
            value.then(this.#onSuccessBind,this.#onFailBind)
            return
        }

        this.#value=value;
        this.#state=STATE.REJECTED
        this.#runCallBacks()
        })
    }

    then(thenCallBack,catchCallBack){
        return new MyPromise((resolve, reject)=>{
            this.#thenCallBacks.push(result=>{
                if(thenCallBack == null){
                    resolve(result)
                    return 
                }
                try{
                    resolve(thenCallBack(result))
                }catch(err){
                    reject(err)
                }
            })
            this.#catchCallBacks.push(result=>{
                if(catchCallBack == null){
                    reject(result)
                    return 
                }
                try{
                    resolve(thenCallBack(result))
                }catch(err){
                    reject(err)
                }
            }) 
            this.#runCallBacks()
        })
        // if(thenCallBack !== null) this.#thenCallBacks.push(this.#thenCallBack) ;
        // if(catchCallBack !== null) this.#catchCallBacks.push(this.#catchCallBack) 
        // this.#thenCallBacks.push(callbackCode)

        
        // this.#runCallBacks()
    }
    catch(callbackCode){
      return  this.then(undefined,callbackCode)
    }
    finally(callbackCode){
        return this.then(result=>{
            callbackCode()
            return result
        },result=>{
            callbackCode()
            throw result
        }
        )
    }

    static resolve(value){
        return new Promise((resolve)=>{
            resolve(value)
        })
    }

    static reject(value){
        return new Promise((resolve , reject)=>{
            reject(value)
        })
    }
}


module.exports= MyPromise



const p = new Promise();

p.then(()=>{

}).catch(()=>{

})

p.then(()=>{

},()=>{})