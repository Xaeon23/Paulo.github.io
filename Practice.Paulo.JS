// Template strings
// Template Default Strings or empty strings
// Destructuring
// Switch Case
// Arrow Function
// Objects inside an Array
// Currying
// Compose
//

// Template Strings

const name = "John Paulo Paluan";
const age = 29;
const gender = "male";
const email = "JohnDoe@gmail.com";
const pet = "Dog";

const Profile = `Hello ako nga pala si ${name} ${gender}, may edad na ${age}.Ito ang email address ko ${email}, at may alaga akong ${pet}.`;
const Profile2 = `Hi ako nga pala yun kanina si ${name},yung may alagang ${pet}.`;
const Profile3 = `Hi ako nga pala si ${name}`;



//Empty Strings or Default Strings
//Debugging the function Empty();

function Empty(name = '', gender = 'lalake', pet = 'dog'){
        return `Hi ako nga pala si ${name} ang kasarian ko ay ${gender} may alaga akong ${pet}.`;
}


//Destructuring

const Destructure = {

        class01: "Monicans",
        class02: "Fatima",
        class03: "Santa Anna"
}

//This is the destructuring for the above code.

const {class01, class02, class03} = Destructure;



//Arrow Function
//Debugging the function x(10, 15);

const x = (a, b) => a+b;

//Currying
//Single Parameter inside a function
//When first function call(S), it will return a function (T) => S + T;
//Debugging the function Z(10)(15);

const Z = (S) => (T) => S + T;


//Objects inside an Array
//Debugging the function LogIn[0].username --- when trying to get the username

let LogIn = [
    {
        username: "John Paulo Paluan",
        password: "123456789",
        email: "JohnDoe@gmail.com"
        
    },
    {
        username1: "RyanWorld2000",
        password1: "Ryanworld_awesome",
        email1: "Ryanworld@gmail.com"
    },
    {
        username2: "Armando Paluan",
        password2: "skyflakes",
        email2: "Armando_Paluan@gmail.com"
    }

];

//Call the function like this: window.Login[0].username

//Done


////Switch Case
function Paulo2(place){
     let galaw2;
      switch(place){
            case "Santa Cruz":
                galaw2 = "Medyo malayo kasi puro Zambal nandito eh";
                break;
            case "Cato Infanta Pangasinan":
                galaw2 = "Ito yung Hometown ko";
                break;
            case "Banog Pangasinan":
                galaw2 = "Tara punta tayo mamaya dto sa amin";
                break;
            case "Daguapn City":
                galaw2 = "Medyo malayo na sa amin to kasi nga 2 hrs ang byahe";
                break;
            case "Alaminos City":
                galaw2 = "Dito ako pinanganak sa lungsod na ito";
                break;
            case "Manila City":
                galaw2 = "The capital city of the Philippines";
                break;
            case "Quezon City":
                galaw2 = "Where my condo unit is located";
                break;
            default:
                galaw2 = "Saan na lugar ito?";
                break;
      }
      return galaw2;
}

//Compose Practice

const compose = (x, y, c) => (z) => x(y(c(z)));
const add10 = (num) => num + 10;
const add15 = (num) => num + 15;
const add20 = (num) => num + 20;
compose(add10, add15, add20)(2);

//ANSWER 

//47


//Compose Practice 2

const compose1 = (a, b, c) => (d) => a(b(c(d)));
const mult1 = (num) => num * 1;
const mult2 = (num) => num * 2;
const mult3 = (num) => num * 3;
compose1(mult1, mult2, mult3)(2);

//ANSWER IS 12


//Advance Arrays

//Map Array

const arrays = [10, 20, 30, 40];

const sagot = arrays02.map(num => 
{
    return num * 2
});

console.log(sagot);

//ANSWER 20 40 60 80


//Filter Array, you ca use condition like <, >, >=, <=, ===

const arrays01 = [10, 20, 30, 40];

const sagot01 = arrays01.filter(num => {
    return num >= 20
});

console.log(sagot01);

//ANSWER  30 40

//Reduce Array

const arrays02 = [10, 20, 30, 40];

const sagot02 = arrays02.reduce((accumulator, num) => {return accumulator * num});

console.log(sagot02);

//ANSWER 240000
//Reduce Array with starting number to be multiplied which is 15

const arrays03 = [10, 20, 30, 40];
const sagot03 = arrays03.reduce((accumulator, num) => {return accumulator * num}, 15);
console.log(sagot03);

//ANSWER 3600000 -- 15 is the starting number of the accumulator instead of 0 as a default.

const composeEx = (q, w, e, r) => (r) => q(w(e(r)));
const add12 = (num) => num + 12;
const add16 = (num) => num + 16;
const add25 = (num) => num + 25;
composeEx(add12, add16, add25)(10);

//ANSWER IS 63

const arrayPractice = [
    {
        username: "johnpaulopaluan",
        password: "123456"
    },
    {
        username: "paupau",
        password: "helloWorld"
    }
];

const answer = arrayPractice.map(obj => obj.username);



//practice compose

const composePractice = (a, b, c, d) => (d) => a(b(c(d)));
const add3 = (num) => num + 3;
const add30 = (num) => num + 30;
const add40 = (num) => num + 40;
composePractice(add3, add30, add40)(10);

//Answer 83

//Destructuring Practice

const skyflakes = {

    username: "johnpaulo",
    password: "Asus101",
    email: "johnpaulo@gmail.com"

}

const {username, password} = skyflakes;



//Object inside an Array

const ObjectArrays = [
    {
        
        type: "smartphones",
        color: "black",
        brand: "Apple",
        cost: 1456,
        location: "Canada",

    }
];

//Debug like this: window.ObjectArrays[0].location
//Answer will be Canada





//Advance Objects Exercises

//Evaluate these:
//#1

// [2] === [2] 

//Answer False because they are two distinct array and sits in different memory, and two different instances.

// {} === {}

//Answer False because they are two distinct objects and sits in different memory, and two different instances.

//#2 what is the value of property a for each object.

const object1 = { a: 5 }; //4 The Answer is 4 because the last line which is object1.a = 4 will override the value.
const object2 = object1;  //4 The Answer is 4 because the last line which is object1.a = 4 will override the value.
const object3 = object2;  //4 The Answer is 4 because the last line which is object1.a = 4 will override the value.
const object4 = { a: 5 }; //5 The Answer is 5 because it's a normal object and no additional references on this code.
object1.a = 4;            //4 The Answer is 4 because it tells the object property which is a to have a value of 4.


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
 

class Animal {
    constructor(name, type, color)
    {
        this.name = name;
        this.type = type;  
        this.color = color;
    }

    sound()
    {
        console.log(`Mooooo my name is ${this.name}, and I'm a ${this.type}.
        My color is ${this.color}`);
    }

};

class Mamal extends Animal {
    constructor(name, type, color)
    {
        super(name, type, color)
    }
};

const animal1 = new Mamal("Shawn", "Cow", "White");




//Example of Advance objects 

class Player  {
        constructor(name, type, power)
            {
                this.name = name;
                this.type = type;
                this.power = power;
            }      
        introduce() 
            {
                console.log(`Hello I'm ${this.name} a strong ${this.type}`);
            }
    }
class Beast extends Player 
        {
        constructor(name, type, power)
            {
                super(name, type, power);
            }
        voice()
            {
                console.log(`I'm ferocious and unstoppable ${this.type}!`);
            }
        };
    

const Beast1 = new Beast("Xaeon", "Beast", "Brute");
const Beast2 = new Beast("Paulo", "Beastful", "Brute force");
const Beast3 = new Beast("Paluan", "Beastiful", "Brutal force");


//Example 2 Advance Objects
class PlayerTest 
    {
        constructor(name, type, power)
        {
            this.name = name;
            this.type = type;
            this.power = power;
        }
    
Dialogue1()
        {
            console.log(`Hello I'm ${this.name} and I'm a unique class called ${this.type}! and I'm carrying ${this.power} to shred my enemies!`);
        }
};

class Lahn extends PlayerTest
    {
        constructor(name, type, power)
        {
            super(name, type, power);
        }
    

Dialogue2()
        {
            console.log(`I will be the guide to your adventure the whole time! So you will be sick of hearing my name ${this.name} over and over again, hahahah. I will be ypur protector as well since I'm a ${this.type} and I weilding a ${this.power}, the enemies will be no match for us! So don't worry.`);
        }
};
const Lahn1 = new Lahn("Alice", "Lahn", "Crescent Blade");

//Example 3 Advance Objects

class Identity
{
    constructor(name, surname, email)
    {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
    dialogue()
    {
        console.log(`Hi I'm ${this.name} ${this.surname}. This is my email address ${this.email}.`)
    }
};
class Identification extends Identity{
        constructor(name, surname, email)
        {
            super(name, surname, email)
        }
};

const Me = new Identification("John Paulo", "Paluan", "jppaluan@gmail.com");


//CHAT GPT PROBLEM SOLVED USING ADVANCE OBJECTS

//Ecmascript7 Practice
//include

const includePractice = ["train", "car", "truck", "tesla", "rivia" ];
includePractice.includes("ship");

//ecmascript07

const square = (a) => a**2;
const cube = (b) => b**2;

// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];


//Answer
dragons.includes("John");

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons01 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

//Answer
const johnNames = dragons.filter(name => {return name.includes("John") });
console.log(johnNames);


// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const powerof100 = (x) => x**100;
powerof100(2) //debugging


// #4) Using your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

//Answer is infinity
//WHY INFINITY
//JavaScript Number Limits: 
//JavaScript represents numbers using a format known 
//as double-precision floating-point. 
//The largest number that can be represented in this format 
//is approximately 1.7976931348623157×10 BY THE POWER 308 --- 10 ** 308
//When a calculation exceeds this maximum value, 
//JavaScript returns Infinity to signify that the result 
//is beyond the representable range.

const power100 = (x) => x**100;
power100(10000);


//Ecmascript08 example
const Ecmascript08 = (
            a,
            b,
            c,
            d,
            e,
            ) => {
                console.log(a)
            };

    Ecmascript08("P", "A", "U", "L", "O");

//it is easier to add objects this way

//Values Ecma08

const objEcma08 = 
    {
    brand:  "Apple",
    brand1: "Samsung",
    brand2: "Google",
    brand3: "Motorola"
    };

    Object.values(objEcma08).forEach(value => {
        console.log(value);
    }
);

//This convert it into an array Object.values(objEcma08)

//Entries Ecma08

const objEcma08E = 
    {
    brand:  "Apple",
    brand1: "Samsung",
    brand2: "Google",
    brand3: "Motorola"
    };

    Object.entries(objEcma08E).forEach(value => {
        console.log(value);
    }
);

//Keys Ecma08

const objEcma08K = 
    {
    brand0:  "Apple",
    brand1: "Samsung",
    brand2: "Google",
    brand3: "Motorola"
    };

    Object.keys(objEcma08K).forEach((key, index) => {
        console.log(key, objEcma08K[key]);
    }
);


//.padStart() example

const startpad = "PADS";
console.log(startpad.padStart(20));

//.padEnd() example

const startpad02 = "PADS";
console.log(startpad02.padEnd(20));



// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
console.log(startLine.padStart(21));
let turtle = '🐢';
console.log(turtle.padStart(10));
let rabbit = '🐇';
console.log(rabbit.padStart(10));

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

//trim() method removes whitespace from both ends of a string
//.padEnd method adds 9 characters of total lenght



// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

const Answer = Object.entries(obj).map(value =>  value.join('')).join('');
console.log(Answer);

// entries.flat()

const arrayFlat = [

    "dog",
    "cat",
    "mouse",
    "snake"
];
arrayFlat.flat()


    
//try catch exercises

try {
    10 + 10; 
}
catch{
    console.log("Hmmmm something went wrong");
}
        
//The answer will be 20 for this.

try {
    False + True; 
}
catch{
    console.log("Hmmmm something went wrong");
}

//The answer will be "Hmmmm something went wrong" for this.


// EXERCISE 10
// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array1 = [[1],[2],[3],[[[4]]],[[[5]]]]

//Answer
array.flat(2);

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

//Answer
const answerGreeting = greeting.map(array => array.join(' '));
console.log(answerGreeting);

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

//Answer
const answerGreeting1 = greeting.map(array => array.join(' ')).join(' ');
console.log(answerGreeting1);

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

//Answer
console.log(trapped.flat(36));

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

//Answer
console.log(userEmail3.trim());

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }

//Answer
const usersArray = Object.entries(users);
console.log(usersArray);


//NOTE entries method will convert objects to arrays while fromEntries convert arrays to objects

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

//Answer
const usersArray02 = Object.entries(users).map(user => {return user[0] + " " + user[1] * 2});
console.log(usersArray02);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

//Answer
const usersObj = [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ];
const usersArray03 = Object.fromEntries(usersObj)
console.log(usersArray03);


//ADVANCE LOOPING EXERCISE


const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
 



const array = [-1,0,3,100, 99, 2, 99] // should return 100
function biggestNumberInArray(arr) 
{
    let num = arr[0];
    for(let i = 1; i < arr.length; i++) //for is use to iterate
        {
            if(arr[i] > num)            //if is use to compare and update the values
                {                       
                 num = arr[i] ;           //need to store the biggest value every loop
                }
                
        }
        return num;                     //need to return the new value every loop until condition is meet
}
console.log(biggestNumberInArray(array)); 


const array2 = ['a', 3, 4, 2]; // should return 4

function biggestNumberInArray2(arr) {
    let num = -Infinity; // Initialize num with the lowest possible value
    for (let element of arr) {
        if (typeof element === 'number' && element > num) { // Check if element is a number and greater than current num
            num = element; // Update num to be the current element
        }
    }
    return num;
}

console.log(biggestNumberInArray2(array2));


const array3 = [] // should return 0
function biggestNumberInArray3(arr) 
{
    if (arr.length === 0) {
        return 0; // Return 0 if the array is empty
    }

    let num = -Infinity; // Initialize num with the lowest possible value
    for (let element of arr) {
        if (typeof element === 'number' && element > num) { // Check if element is a number and greater than current num
            num = element; // Update num to be the current element
        }
    }
    return num;
}

console.log(biggestNumberInArray3(array3));



// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) 
{
        if(lookingFor in basket){
            return `${lookingFor} is in the basket`;
        }
            else{
                return `${lookingFor} is not in teh basket`;
            }
        };



//ES2020

// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991

// Exercise 2: why does this throw an error? How can you fix it?
              //Because n is not necessary when trying to add safe integers
3 + 4 + 1n    //Remove n since we are adding numbers within safe integer
              //We could try to put n also in 3 and 4: OUTPUT is 3n + 4n + 1n = 8n

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

const pokemon = will_pokemon?.pikachu?.species
console.log(pokemon);

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }


// Exercise 4: What do these each output?
console.log(false ?? 'hellooo') //false -- The nullish coalescing operator (??) returns the right-hand 
                                //operand only if the left-hand operand is null or undefined.

console.log(null ?? 'hellooo')  //hellooo -- Here, the left-hand operand is null, which triggers the nullish 
                                //coalescing operator to return the right-hand operand. Therefore, 'hellooo' is returned.

console.log(null || 'hellooo')  //hellooo -- The logical OR operator (||) returns the right-hand operand if the left-hand 
                                //operand is falsy (i.e., false, 0, '', null, undefined, or NaN). Since null is a falsy value, the operator returns 'hellooo'.

console.log((false || null) ?? 'hellooo') //hellooo -- The logical OR operator (||) returns the right-hand operand if the left-hand 
                                          //operand is falsy (i.e., false, 0, '', null, undefined, or NaN). Since false is a falsy value, the operator returns 'hellooo'.

console.log(null ?? (false || 'hellooo')) //hellooo -- The expression inside the parentheses (false || 'hellooo') evaluates first. Since false is falsy, the logical OR operator 
                                          //returns 'hellooo'. The outer nullish coalescing operator then evaluates null ?? 'hellooo', which returns 'hellooo' since the left-hand operand is null.



//replaceAll method will replace all instances of string inside the string

const str = "Rich Dad Poor Dad!";
console.log(str.replaceAll("Dad", "Girl"));

//replace method only replace the first instances

const replaceOnly = "Rich Dad Poor Dad!";
console.log(replaceOnly.replace("Dad", "Girl"));

const sample = "The millionaire next door!";
console.log(sample.replace("millionaire", "billionaire"));


//ecma2023

const ztmMonsters = [
    {id: 1, monster: 'Mr. Mouse', level: 1},
    {id: 2, monster: 'Mac', level: 30},
    {id: 3, monster: 'Denodude', level: 17},
    {id: 4, monster: 'Pye', level: 5},
    ];

const ztmAnswer = ztmMonsters.findLast(monster => monster.level > 2);
console.log(ztmAnswer);

const lastMonster1 = ztmMonsters.findLast(item => item.level > 17);
    console.log(lastMonster1);
    
    // Old Way
    const advancedMonsters = ztmMonsters.filter(item => item.level > 15)
    console.log(advancedMonsters)
    console.log(advancedMonsters[advancedMonsters.length - 1])
    
    
    // Using findLast()
    const lastMonster = ztmMonsters.findLast(item => item.level > 15);
    console.log(lastMonster);
    
    

    // Using findLastIndex()
    const lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15);
    console.log(lastMonsterIndex);//2

    const lastMonsterIndex1 = ztmMonsters.findLastIndex(item => item.level < 15);
    console.log(lastMonsterIndex1);//3
    
    
    const ztmMonstersList = ['Mr. Mouse', 'Mac', 'Denodude', 'Pye'];
    
    //Using reverse() --- does reverse the original arrays aswell
    const reverseMonsters = ztmMonstersList.reverse();
    console.log(ztmMonstersList) 
    console.log(reverseMonsters) 
    
    //using toReversed() --- does not reverse the original arrays.
    const reversedMonstersTo = ztmMonstersList.toReversed();
    console.log(ztmMonstersList) 
    console.log(reversedMonstersTo)
    
    //Using toSorted() --- does Not sort the original array
    const sortedMonstersTo = ztmMonstersList.toSorted();
    console.log(ztmMonstersList) 
    console.log(sortedMonstersTo)


    //Using sort() --- does sort the original array
    const sortedMonstersTo1 = ztmMonstersList.toSorted();
    console.log(ztmMonstersList) 
    console.log(sortedMonstersTo1)
    
    //Using toSpliced() --- the first parameter indicates the index and the second parameter indicates how many item inside the array to remove from left to right.
    const spliceMonstersTo = ztmMonstersList.toSpliced(2, 1); //answer will be --- ['Mr. Mouse', 'Mac', 'Pye']
    console.log(ztmMonstersList) 
    console.log(spliceMonstersTo)
    
    //Old Way
    ztmMonstersList[1] = 'Gost';
    console.log(ztmMonstersList)
    
    // Using with() --- in this example replacing the index 1 with the second parameter which is Gost but doesnt modify the original list inside the array.
    // The answer will be ['Mr. Mouse', 'Gost', 'Denodude', 'Pye']
    const withMonsters = ztmMonstersList.with(1, 'Gost');
    console.log(ztmMonstersList) 
    console.log(withMonsters)

    //compose recap

    const comp = (a, b, c, d) => (d) => a(b(c(d)));
    const add2 = num => num + 2;
    const add4 = num => num + 4;
    const add6 = num => num + 6;
    comp(add2, add4, add6)(10);
    //22

    //Javascript is a single thread language that is non-blocking, v8 is use to communicate js code to browsers, 
    //it compose of 2 parts, Memory heap and Call Stack


    //synchronous, execute the first line before the second line, one at a time.

    //asynchronous, is like a behaviour

    //Recursion --- is a function that calls itself

    function foo()
    {
        foo()
    };

    //ES6 + Webpack2
    //js1
    export const add = (a, b) => a + b;
    //or
    export default function add(){
        return a + b;
    }
    //js2
    import { add } from './add';
    //or
    import add from './add';

    //call stack

    const one = () => {
        const two = () => {
            console.log('5');
        }
        two();
    }

    //1. https://github.com/getify/You-Dont-Know-JS

    //2. http://javascript.info/

    //3. http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/


    //What is the Challenge?
//Solve the below 3 javascript puzzles. The goal of this challenge is to practice our logic skills. Something that is useful not only in interviews when you get challenging problems, but also in your day to day work as a developer. First, start off by reading this article: https://medium.freecodecamp.org/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2

//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

//Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
    

function cleanRoom(inputArray) {
    // Separate numbers and strings
    const numbers = inputArray.filter(item => typeof item === 'number');
    const strings = inputArray.filter(item => typeof item === 'string');

    // Helper function to group and sort an array
    function groupAndSort(arr) {
        // Sort the array
        arr.sort((a, b) => a - b);

        const result = [];
        let currentGroup = [arr[0]];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === currentGroup[currentGroup.length - 1]) {
                currentGroup.push(arr[i]);
            } else {
                if (currentGroup.length > 1) {
                    result.push(currentGroup);
                } else {
                    result.push(currentGroup[0]);
                }
                currentGroup = [arr[i]];
            }
        }

        // Add the last group
        if (currentGroup.length > 1) {
            result.push(currentGroup);
        } else {
            result.push(currentGroup[0]);
        }

        return result;
    }

    // Group and sort numbers and strings separately
    const groupedNumbers = groupAndSort(numbers);
    const groupedStrings = groupAndSort(strings);

    // Combine the results
    const finalResult = [];
    if (groupedNumbers.length > 0) {
        finalResult.push(groupedNumbers);
    }
    if (groupedStrings.length > 0) {
        finalResult.push(groupedStrings);
    }

    return finalResult;
}

// Example usage
const inputArray1 = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const inputArray2 = [1, "2", "3", 2];


console.log(cleanRoom(inputArray1)); 
console.log(cleanRoom(inputArray2)); 

//2
function findTwoSum(arr, target) {
    const seenNumbers = {};

    for (let i = 0; i < arr.length; i++) 
        {
        const currentNumber = arr[i];
        const neededNumber = target - currentNumber;

        if (seenNumbers[neededNumber] !== undefined) {
            return [neededNumber, currentNumber];
        }

        seenNumbers[currentNumber] = i;
    }

    return null; // If no pair is found that adds up to the target
}


const name1 = {
    if(x = y){
        console.log("Paulo");
    }
}

//octal
console.log(018 - 013); //7 -- since 018 is not a valid octal(0-7) and 013(11) is valid then so it will be 18 - 11 = 7
                        // change it to decimal literals to avoid confusion, it will be 18 - 13 so it will be 5