// PASSWORD GENERATOR

// Character Generator Functions

// Function that accepts a string value as an anrgument and returns a random index number from a string argument.
function randomIndex(str){
    return Math.floor(Math.random() * str.length);
}
randomIndex(`example`); // 0, 1, 2, 3, 4, 5, 6
// Example of the randomIndex function
console.log(randomIndex(`example`));

// Function that returns a random lowercase letter.
function getRandomLower(){
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    // Returning a random letter using a random index in the "letters" string.
    return letters[randomIndex(letters)];
}

// Example of the getRandomLower function
console.log(getRandomLower()); // Random lowercase letter

// Function that returns a random uppercase letter.
function getRandomUpper(){
    // Running the "getRandomLower"function to create a random letter and setting that value to the letter variable.
    const letter = getRandomLower();
    // Changing the random letter to an Uppercase letter and returning it from the function.
    return letter.toUpperCase();
}

// Example of the getRandomUpper function
console.log(getRandomUpper());

// Function that returns a random number as a string value. 
function getRandomNumber (){
    const numbers = `1234567890`;
    // Returning a random number using a random index in the "numbers" string.
    return numbers[randomIndex(numbers)];
}

// Example of the getRandomNumber function.
console.log(getRandomNumber()); // Random number from the "numbers" string.

// Function that returns a random symbol
function getRandomSymbol(){
    const symbols = `!@#$%^&*(){}[]=<>/,.`;
    // Returning a random letter using a random index in the "letters" string.
    return symbols[randomIndex(symbols)];
}

// Example of the getRandomSymbol function.
console.log(getRandomSymbol()); // Random symbol from the "symbols" string.

// Object to store all the character generator functions.
const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Selecting the DOM Elements
const resultEL = document.querySelector(`#result`);
const clipboardEL = document.querySelector(`#clipboard`);
const lowercaseEL = document.querySelector(`#lowercase`);
const uppercaseEL = document.querySelector(`#uppercase`);
const numbersEL = document.querySelector(`#numbers`);
const symbolsEL = document.querySelector(`#symbols`);
const lengthEL = document.querySelector(`#length`);
const generateEL = document.querySelector(`#generate`);

// Function that accepts true or false values as well as a number as arguments
// NOTE: The checkbox inputs and number input will determine the value arguments entered into this function.
function generatePassword(lower, upper, number, symbol, length){

console.log(lower, upper, number, symbol, length);

// 1. CREATE THE PASSWORD VARIABLE
let generatedPassword = ``;

// 2. FILTER OUT UNCHECKED OPTIONS
// True and false values can be added together. True is 1 and false is zero.
// NOTE: The value set to typesCount will be used when building the password.
const typesCount = lower = upper = number = symbol;
console.log(typesCount);

// If the user has not selected any of the four options, then display alert and return an empty string from the function so the password displayed will just be an empty string.
if (typesCount === 0){
    alert(`Please select at least one option`);
    // The RETURN keyword stops/ends the execution of a function (Does not run any of the code on the lines that follow the return in the function. ) 
    return ``;
}

// Creating an array of arrays.The first item in each nested array hold the value of a string that will be used to access a function in the randomFunctions object. Also, the second item in each nested array is one of the values passed into this generatePassword function.
let typesARR = [
    [`lower`, lower],
    [`upper`, upper],
    [`number`, number],
    [`symbol`, symbol]
];
console.log(typesARR);

// The filter method creates a new array with all the items that pass the test implemented by the provided function (All the items that cause the function to return a boolean value of true when the function is run using the item as an argument for the item parameter in this example..)
// Checking for the value for index of one in each item in the array if it is false.
typesARR = typesARR.filter(item => {
    console.log(item[1]);
    return item[1];
});
console.log(`typesARR:`, typesARR);

// 3. LOOP OVER THE LENGTH AND CALL THE GENERATOR FUNCTION FOR EACH CHECKED OPTION
// Building password with a for loop
// NOTE: The value for "length" is the value selected for the length number input.
for (i = 0; i < length; i += typesCount){
    //  One of the items in the updated/filtered version of the typesARR will be the value/argument passed into for the type parameter each time the anonymous arrow function.
    typesARR.forEach(type => {
        const funcName = type[0];
        console.log(funcName);
        // Accessing and running/executing a function in the randomFunctions object. Also, adding the value returned from the accessed function to the generatedPassword string variable.
        generatedPassword += randomFunctions[funcName]();
        console.log(generatedPassword);
    });
}

// 4. ADD THE GENERATED PASSWORD TO THE FINAL VARIABLE AND RETURN IT FROM THE FUNCTION.
// Removing extra characters if necessary (the above loop will create a password that may not match the length selected if that length is not a multiple of the number of options/checkboxes selected).
const finalPassword = generatedPassword.slice(0,length);
console.log(finalPassword);
return finalPassword;
}

// Example of generatePassword function.
// NOTE: Using the starting value for when the page first loads.
generatePassword(true, true, true, true, 10);

// Event listener for when the "Generate Password" button is clicked. 
generateEL.addEventListener(`click`, () => {
    // Checking if the following options are selected/checked and setting the true or false values to the respective variable.
    const hasLower = lowercaseEL.checked;
    const hasUpper = uppercaseEL.checked;
    const hasNumber = numbersEL.checked;
    const hasSymbol = symbolsEL.checked;
    
    // Accessing the value for the number input and changing the value from a string to a number.
    // NOTE: The value returned from a number input is a string value. 
    const length = parseInt(lengthEL.Value);

    console.log(hasLower, hasUpper, hasNumber, hasSymbol, length);

// The generatePassword function takes the true false values determined by the checkboxes as well as the number input as arguments and returns a string (the password) which is set as the innerText value for the "result" (span) element. 
resultEL.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

