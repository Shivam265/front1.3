class fruits{
    name="orange"

constructor()
{
    console.log("constructor",this.name)
}

getfruits(item)
{
    return item
    console.log("function")
}
}

f1.getfruits()//object or method

let f1 = new fruits;//object
console.log(f1.name)
   

