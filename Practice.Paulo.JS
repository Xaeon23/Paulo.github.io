// Template strings
// Template Default Strings or empty strings
// Destructuring
// Switch Case
// Arrow Function
// Objects inside an Array
// Currying
//Compose


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
                    galaw = "Bangking ka muna dyan";
                    break;
                default:
                    galaw = "saan ka pupunta dyan?";
                    break;
            }
            return galaw;
}


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










