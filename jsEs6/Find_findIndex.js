//let data = [11,22,33,44,55];
/*let result = data.find(function(item){// position in value return
    return item<50;*/
/*let result = data.findIndex(function(item){ //position index  return
        return item<7;*/    

let data = [
    {id:10,name:"A"},
    {id:20,name:"B"},
    {id:30,name:"C"},
    {id:40,name:"D"},
    {id:60,name:"E"}

]

let result = data.find(function(item){
    return item.id < 50;
})
console.log(result)
