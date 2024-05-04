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

const forEachArrays = array.forEach(obj => obj.username + "!");
  


//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArrays = array.map(obj => obj.username + "?");


//Filter the array to only include users who are on team: red

const filterArrays = array.filter(obj => {return obj.team === "red" });
const username = filterArrays.map(obj => obj.username);


//Find out the total score of all users using reduce

const reduceArrays = array.reduce((score, acc) => {return acc.score + obj.num});



// (1), what is the value of i?
// (2), Make this map function pure:

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//ANSWER
//The value of i is 


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
