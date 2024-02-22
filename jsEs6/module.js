export  default function module(){
    console.log("hello user")
}
export function moduleOther(){ //module used in function
    console.log("hello other user")   
}
export let   moduleVar = "hello user var"; //var used module

export class moduleClass{//module used in class 
    text(){
        console.log("module class text function")
    }
}
class moduleOtherClass{
    text(){
        console.log("other user class tect function")
    }
}
export let UOC = new moduleOtherClass();