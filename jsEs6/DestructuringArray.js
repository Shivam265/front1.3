let fruits = ["aaple","banana","graphes","dates"]
let [fruits1,,fruit3,fruit4="unknown fruit"] = fruits
//console.log(fruits[2]) 
//console.log((fruits[0]))
//console.log(fruit)
let [fruit1,...fruitx] = fruits//rest operator
console.log(fruitx)