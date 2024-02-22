let a = undefined;//undefined in a datatype
/*setTimeout(()=>{
    a="hello"

},3000)*/
 
let promiseData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        a="hello"
        resolve("done")
    },3000) ; 
    promiseData.then(() =>{
        alert(a);

    })

    /*promiseData.catch(()=>{
        alert(a)

    })*/
    
    
    

})
alert(a)