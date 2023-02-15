// CORE ASSIGNMENT #1 - Predict Destructuring
//  For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.

// PROBLEM #1:
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

console.log(randomCar)
// Predicted output: 'Tesla'
// Actual output: 'Tesla'

console.log(otherRandomCar)
// Predicted output: 'Mercedes'
// Actual output: 'Mercedes'


// PROBLEM #2:
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

console.log(name);
// Predicted output: Undefined
// Actual output: ReferenceError: name is not defined

console.log(otherName);
// Predicted output: ReferenceError: otherName is not defined
// Actual output: 'Elon'


// PROBLEM #3:
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

console.log(password);
// Predicted output: '12345'
// Actual output: '12345'

console.log(hashedPassword);
// Predicted output: undefined
// Actual output: undefined



// PROBLEM #4:
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //first = 2
const [,,,second] = numbers; //second = 5
const [,,,,,,,,third] = numbers; //third = 2

console.log(first == second);
// Predicted output: false
// Actual output: false

console.log(first == third);
// Predicted output: true
// Actual output: true



// PROBLEM #5:
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

console.log(key);
// Predicted output: 'value'
// Actual output: 'value'

console.log(secondKey);
// Predicted output: [1,5,1,8,3,3]
// Actual output: [1,5,1,8,3,3]

console.log(secondKey[0]);
// Predicted output: 1
// Actual output: 1

console.log(willThisWork);
// Predicted output: 5
// Actual output: 5