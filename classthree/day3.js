

//Write a function calculateDiscount that takes two 
// parameters: price and discount (with a default value of 10). The function should 
// return the final price after applying the discount


function calculateDiscount(price, discount = 10) {
    if (price < 0 || discount < 0) {
        throw new Error("Price and discount must be non-negative values.");
    }

    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    return finalPrice;
}

// Example usage:
console.log(calculateDiscount(100));
console.log(calculateDiscount(200, 20));




// Create a function createMessage that takes a default message and an indefinite 
// number of names. The function should return an array of personalized messages for 
// each name. 

function createMessage(defaultMessage, ...names) {
    return names.map(name => `${defaultMessage}, ${name}!`);
}

const defaultMsg = "Hello";
const personalizedMessages = createMessage(defaultMsg, "Gaurav", "Tanmay", "Arnav");

console.log(personalizedMessages); 

// . Write a function createUserProfile that takes three 
// parameters: username, age (defaulting to 25), and country (defaulting to "Unknown"). 
// Return an object with these properties. 



function createUserProfile(username, age = 25, country = "Unknown") {
    return {
        username: username,
        age: age,
        country: country
    };
}

// Example usage:
const user1 = createUserProfile("Tanmay");
const user2 = createUserProfile("Gaurav", 30, "India");
const user3 = createUserProfile("Asif", undefined, "india");

console.log(user1);
console.log(user2);
console.log(user3); 


// Write a function logArguments that takes any number of arguments and logs them to 
// the console. Use rest parameters to collect the arguments. 
function logArguments(...args) {
    console.log(args);
}

logArguments(1, 2, 3); 
logArguments("hello", true, { key: "value" }); 
logArguments(); 


// Create a function mergeArrays that takes two arrays as parameters and returns a new 
// array that combines both arrays using the spread operator. 

function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}


const arr1 = [9, 2, 3];
const arr2 = [6, 4, 7];
const mergedArray = mergeArrays(arr1, arr2);

console.log(mergedArray); 



// Define a function sum that takes three numbers as parameters and returns their sum. Use 
// the spread operator to call this function with an array of numbers. 

function sum(a, b, c) {
    return a + b + c;
}

const numbers = [4, 7, 9];
const result = sum(...numbers);

console.log(result); 
