class MyPromise{
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
}


module.exports= MyPromise