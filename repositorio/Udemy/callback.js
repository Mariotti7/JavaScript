function f1(callback){
    console.log('f1')
    if(callback) callback()
}

function f2(callback){
    console.log('f2')
    if(callback) callback()
}

function f3(callback){
    console.log('f3')
    if(callback) callback()
}

f1(f1Callback)

function f1Callback(){
    f2(f2Callback)
}

function f2Callback(){
    f3(f3Callback)
}

function f3Callback(){
    console.log('Olá, DevOps')
}