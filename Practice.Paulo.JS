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


//Switch Case

function Paulo(move){
        let galaw;
            switch(move){
                case "forward":
                    galaw = "galaw laka na dyan sa";
                    break;
                case "back":
                    galaw = "atrsa ka mamaya dyan";
                    break;
                case "right":
                    galaw = "punta ka na sa kanan huh?";
                    break;
                case "left":
                    galaw = "punta ka na sa kaliwa";
                    break;
                case "fly":
                    galaw = "lilipad ka na mamaya dyan";
                    break;
                case "sideways":
                    galaw = "angeled ka muna dyan";
                    break;
                case "dive":
                    galaw = "submerge ka na";
                    break;
                default:
                    galaw = "saan ka pupunta dyan?";
                    break;
            }
            return galaw;
};


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

function Paulo02(move01)
{
    let connect;
        switch(move01){
            case "forward":
                connect = "Go ahead";
                break;
            case "back":
                connect = "Retreat";
                break;
            case "left":
                connect = "Punta ka na sa kaliwa";
                break;
            case "right":
                connect = "Punta ka sa kanan";
                break;
            default:
                connect = "I do not know which way";
        }
        return connect;
};

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


function PauloSwitchCase(galaw){
        let move;
            switch(galaw){
                case "forward":
                    move = "Go ahead, you can do it!";
                    break;
                case "back":
                    move = "Step back a bit";
                    break;
                case "right":
                    move = "Go to the right side or step right";
                    break;
                case "left":
                    move = "Go to the left side or step left";
                    break;
                case "fly":
                    move = "I can go up and up and up from here!";
                    break;
                default:
                    move = "I do not know which way to go";
                    break;

            }
            return move;
};


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
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {

}

function biggestNumberInArray2(arr) {

}

function biggestNumberInArray3(arr) {

}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {

}