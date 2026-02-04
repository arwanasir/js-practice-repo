function fizzBuzz(num){
    if(num%3 === 0 && num%5 === 0){
        return "FIZZBUZZ";
    }else if(num%3===0){
        return "FIZZ";
    }else if(num%5 === 0){
       return "BUZZ";
    }else{
        return num;
    }
}
// console.log(fizzBuzz(8));
// console.log("hello world!")

function evenNum(array){
    for (let i of array){
        if(i % 2 === 0){
           console.log(i);
        }


    }
}
evenNum([1,2,3,4,5,6,7,8,9,10]);

// filter()
let array = [1,2,3,4,5,6];
let evenOnly = array.filter(number => number % 2 === 0 );
console.log(evenOnly);

// example 2 :
function isBig(value){
    return value >= 100;
}
let arrays = [24,200,400,50,234];
let bigNum = arrays.filter(isBig)

console.log(bigNum)
// map()
let nums = [1,2,3,4,5]
const updatedNum = nums.map(num => num * num)

let employees = [
    {id:1,name:'john',email:'JoHn@gmail.com'},
    {id:2,name:'alice',email:'AlIce@gmail.com'},
    {id:3,name:'joe',email:'JoHn@gmail.com'}]

const updatedEmployees = employees.map(employee =>({
    ...employee,
    email : employee.email.toLowerCase()

}));

console.log(updatedEmployees)

let nums_ = [1,2,3,4,5]
let sum = nums_.reduce((a,b) =>{
   return a + b

})
console.log(sum)

// a function that converst an array element into a lower calse
function toLower(values){
    return values.toLowerCase();
}
let str_arrays = ["ANNA","JOE","JOHN","ALICE"]
const lowerCaseArray = str_arrays.map(toLower);
console.log(lowerCaseArray);

function createObject(name, age){
    return {name:name,age:age};
}
console.log(createObject("joe",12));


// a function that returns the keys from the object passed to it.
let cars = {
    name:"toyota",
    price:1000,
    year:2020
}

function getKeys(cars){
    return Object.keys(cars);
}
console.log(getKeys(cars));
