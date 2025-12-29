let fruits=["apple","banana","cherry"];
console.log("Initial Array:",fruits);

//push
fruits.push("orange");
console.log("After push:",fruits);

//pop
fruits.pop();
console.log("After pop:",fruits);

//shift
fruits.shift();
console.log("After shift:",fruits);

//unshift
fruits.unshift("mango");
console.log("After unshift:",fruits);

//concat
let tropicalFruits=["pineapple","papaya"];
let allFruits=fruits.concat(tropicalFruits);
console.log("After concat:",allFruits);

//forEach

allFruits.forEach(fruit=>{
    console.log(fruit); 
});
allFruits.reverse();
console.log("After reverse:",allFruits);
//sort
allFruits.sort();
console.log("After sort:",allFruits);

//reverse after sort
allFruits.reverse();
console.log("After reverse:",allFruits);





