class categorey{
    dryFruit()
    {
        return "almond to dry"
    }

    pomeFruit()
    {
        return "apple is pom fruit"
    }
}
class fruits extends categorey{
    constructor()
    {
        super()
        console.log("constructor")
    }
    getfruit()
    {
        return "you get apple"
    }
}

let f1 =  new fruits
let c1 = new categorey
console.log(c1.dryFruit())
console.log(f1.pomeFruit())
