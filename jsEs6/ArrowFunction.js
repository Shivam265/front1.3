let data  = [11,12,13,14,15];
let newData = data.map(function(item){
    return item*2 //map function 


})
console.log(newData)

/*function text(){
    return 1;
}//name function

let text2 = function()
{
    return 1

}//Anonymous function

let text3=()=>{
    return 4

}//Arrow function* 
console.log(text2())
console.log(text3())*/

    
let item = {
    name:"rohit",
    getName:function()

{
console.log("normal",this)
},
getNameArrow:()=>{
    console.log("arrow",this)
}
}
item.getName();
item.getNameArrow();