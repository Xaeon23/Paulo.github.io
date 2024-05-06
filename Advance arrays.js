// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
//In forEach always use push instead of return
const AdvanceArrays = []
const forEachArrays = array.forEach((obj)=> 
  { 
  AdvanceArrays.push(obj.username + "!")
  });

console.log(AdvanceArrays);
  

//Create an array using map that has all the usernames with a "? to each of the usernames

//Map method never mutated the array. it always return a value

const mapArrays = array.map(obj => obj.username + "?");
console.log(mapArrays);


//Filter the array to only include users who are on team: red

const filterArrays = array.filter(obj => {return obj.team === "red" });
const usernameCall = filterArrays.map(obj => obj.username);
console.log(usernameCall);


//Find out the total score of all users using reduce
//ANSWER, NOT YET SOLVE


const scoreArray = array.reduce((obj, score, num, acc) => {
  return obj.score});
  console.log(scoreArray);



// (1), what is the value of i? 
// (2), Make this map function pure: 

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//ANSWER(1)
//The value of i is 1

//ANSWER(2)

const arrayNum = [1, 2, 3, 4, 8, 9];
const newArray = arrayNum.map((num, i) => {return num * 2});
console.log(newArray);


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.


const arrayBonus = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//NOT ANSWERED or wrong answer



