function steps(){
    let a = 10;
    let b = 20;
    console.log(10+20)
    yield 'step 1 completed'
    console.log(10-20)
    yield 'step 2 completed'
    console.log(10*20)
    yield 'step 3 completed'
    return "all step done"
   

}
let stp = steps()
function getSetps(){
    console.log(stp.next())
}


