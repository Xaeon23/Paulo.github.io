//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//ANSWER

const OneLine = (x) => (y) => x + y;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) 

//ANSWER

// 13

//Detailed explaination:
//The addTo function is a curried function, meaning it takes multiple arguments one at a time,
//returning a new function each time until all arguments are supplied.
//So, addTo takes x and returns a function that takes y and adds it to x. 
//When you define addToTen = addTo(10), you're fixing x as 10, 
//creating a new function addToTen that only takes y and adds it to 10.
//When you call addToTen(3), it essentially means 10 + 3, resulting in 13. So, the answer is 13.




//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

//ANSWER

// 31



//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

//ANSWER

//17



//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

//ANSWER

//22

//What are the two elements of a pure function?

//Always have return
//Determinism
