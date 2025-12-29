console.log("Hello World");

//datatypes
let a=32.3;
console.log(a);
let b=0b11;
console.log(b);
const str1="Welcome";
console.log(str1);
let student=true;
console.log(student);
let val=null;
console.log(val);
let undef=undefined;
console.log(undef);
let bignum=1234552224343322333366767n;
console.log(bignum); 
let person=[{name:'rahul',age:22,usn:'4ni23cs056',branch:'CSE',
    
}];
console.log(person);

console.log("Name:",person.name);
console.log("Age:",person['age']);
//modification
person.age=24;
person["branch"]="ISE";
console.log("After modification:",person);

//add props
person.gender="Male";
person["country"]="India";
console.log("After adding props:",person);

//delete props
delete person.branch;
console.log("After deleting 'branch'props:",person);

//nested object
person.address={
    street:"123 Main St",
    city:"Metropolis",
    zip:"11011"

};
console.log("After adding nested object 'address':",person);
//accessing nested object props
console.log("City:",person.address.city);
console.log("Zip:",person["address"]["zip"]);

//using object method
person.greet=function(){
    return "Hello, " +this.name+" "+this.age+" years old";
 };
 console.log(person.greet());

 //checking prop existence
 console.log("Has age prop:",'age' in person);
 console.log("Has branch prop:",'branch' in person);

