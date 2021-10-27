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
function getRandomSymbol(``){
    const symbols = `!@#$%^&*(){}[]=<>/,.`;
    // Returning a random letter using a random index in the "letters" string.
    return symbols[randomIndex(symbols)];
}

// Example of the getRandomSymbol function.
console.log((getRandomSymbol)); // Random symbol from the "symbols" string.