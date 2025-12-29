const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter
const oddNumbers=numbers.filter(n=>n%2!==0);
console.log('Odd Numbers:', oddNumbers);

//map
const doubledOddNumbers=oddNumbers.map(n=>n*2);
console.log("Doubled odd numbers:",doubledOddNumbers);

//reduce
const sumOfDoubledOddNumbers=doubledOddNumbers.reduce((sum,n)=>sum+n,0);
console.log("Sum of doubled odd numbers:",sumOfDoubledOddNumbers);