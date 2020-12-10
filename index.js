
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product

let num1 = prompt('Can you give me a number?');
let num2 = prompt('One more number please');
let product = 0;

const multiplication = () => {
 for (let i = 0; i < num2; i ++) {
  product += parseInt(num1);
}
  return product
};
const answer1 = multiplication()
const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters


const regConsonants = /[^aeiou]/gi; 
const regVowels = /[aeiou]/gi;

let word = prompt("what's your favorite word?");
let question = prompt('would you like the vowels first or consonants?').toLowerCase();

let consonants = word.match(regConsonants);
let vowels = word.match(regVowels);

vowelOrConsonant = () => {
if (question === 'consonants') {
 let concatenated = [...consonants, ...vowels]
  return concatenated.join('')

} else { 
  let concatenated = [...vowels, ...consonants]
  return concatenated.join('');

}
};

const answer2 = vowelOrConsonant()
const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2




//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins
let player = {
  name: prompt("What's your name?"),
  lives: 3,
  faild_number : []
}

let randomNumber = Math.floor(Math.random() * 50 ) + 10;

guessTheNumber  = () => {
for ( let i = 0; i < 3; i ++) {
  let number = prompt('Please provide a number between 10 - 50')
  player.lives -= 1;

  if (parseInt(number) === randomNumber)  {
    alert (`${player.name.toUpperCase()} YOU GOT IT RIGHT!`)
    return (`${player.name.toUpperCase()} YOU WON! ${randomNumber} is correct!`)
    break;
    }  
    player.faild_number.push(number) 
  }
    return (`Sorry ${player.name} ${player.faild_number.join(', ')} were wrong. The correct number is ${randomNumber}.`)
    
  };

const answer3 = guessTheNumber()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

sort = () => {
  let userOption = prompt('How would you like your library sorted by the author, title, or libraryID?').toLowerCase();
  let newLibrary = [];
  let library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

for (product in library) {
  if (userOption === 'title') {
    newLibrary.push(library[product].title)
}
   if ( userOption === 'author' ) {
    newLibrary.push(library[product].author)
}
   if ( userOption === 'libraryID'){
    newLibrary.push(library[product].libraryID)
}
if (newLibrary.length === library.length){
return `${newLibrary.sort().reverse().join(',  ')}`
}
};

return `${newLibrary.sort().join(',  ')}`
}
const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4