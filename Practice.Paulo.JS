// Template strings
// Template Default Strings or empty strings
// Destructuring
// Switch Case
// Arrow Function
// Objects inside an Array
// Currying


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

function Empty(name = '', gender = 'lalake', pet = 'dog'){
        return `Hi ako nga pala si ${name} ang kasarian ko ay ${gender} may alaga akong ${dog}.`;
}


//Destructuring

const Destructure = {

        class01: "Monicans",
        class02: "Fatima",
        class03: "Santa Anna"
}

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

const X = (a, b) => a+b;

//Currying

const Z = (S) => (T) => S + T;


//Objects inside an Array

let LogIn = [
    {
        username: "John Paulo Paluan",
        password: "123456789",
        email: "JohnDoe@gmail.com"
        
    },
    {
        username1: "RyanWorld2000",
        password1: "Ryanworld_awesome",
        email: "Ryanworld@gmail.com"
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











