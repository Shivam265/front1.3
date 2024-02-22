//ES6
//Rest & Spread operator 
//Example Rest
function addNumber(a,b,c,...other){/* rest operator*/
    console.log(other[0,1])
    return a+b+c

}
const res = addNumber(2,5,6,8,9,4,3,7)
console.log(res)

//Spread operator

var names = ["ajay","rohit","mohit","ram"]
function getNames(name1,name2,name3,name4){
    console.log(name1,name2,name3,name4)

}
//getNames(names[0],names[1],names[2],names[3])
getNames(...names)//best no1 
//getNames(names)

//object ke sath
let students={
    name:"Ajay",
    age:"26",
    hobbies:["crickest","singing"]
}
//const sge=students.age;
//const {age,name} = students;//destructuring 
const {...rest} = students;// rest  operator
console.log(rest)


//spread 
let newStudent={
    ...students,
    age:30
}
console.log(newStudent)