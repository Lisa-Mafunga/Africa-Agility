//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Lisa";
console.log("First Name: " + firstName + " " + "Type:" + typeof firstName);
let lastName = "Mafunga";
console.log("Last Name: " + lastName + " " + "Type:" + typeof lastName);
let country = "Zimbabwe";
console.log("Country: " + country + " " + "Type:" + typeof country);
let city = "Harare";
console.log("City: " + city + " " + "Type:" + typeof city); 
let age = 22;
console.log("Age: " + age + " " + "Type:" + typeof age);
let isMarried = false;
console.log("isMarried: " + isMarried + " " + "Type:" + typeof isMarried);
let year = 2025;
console.log("Year: " + year + " " + "Type:" + typeof year);


//2. Check if type of '10' is equal to 10
console.log("Is '10' equal to 10?: " + (10 === "10"));

//3. Check if parseInt('9.8') is equal to 10
console.log("Is parseInt('9.8') equal to 10?: " + (parseInt('9.8') === 10));

/*4. Boolean value is either true or false.
i. Write three JavaScript statements which provide truthy value.*/

let truthyValue1 = true;
console.log("Truthy Value 1: " + truthyValue1);

let truthyValue2 = "Hello";
console.log("Truthy Value 2: " + truthyValue2);

let truthyValue3 = 10;
console.log("Truthy Value 3: " + truthyValue3);

//ii. Write three JavaScript statements which provide falsy value.
console.log(`Falsy value 1: ${0}`); 
console.log(`Falsy value 2: ${""}`); 
console.log(`Falsy value 3: ${null}`); 

/* 5.  Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')

Expected Results:
4 > 3 && 10 < 12: true (both conditions are true)
4 > 3 && 10 > 12: false (second condition is false)
4 > 3 || 10 < 12: true (first condition is true)
4 > 3 || 10 > 12: true (first condition is true)
!(4 > 3): false (negation of true)
!(4 < 3): true (negation of false)
!(false): true (negation of false)
!(4 > 3 && 10 < 12): false (negation of true)
!(4 > 3 && 10 > 12): true (negation of false)
!(4 === '4'): true (negation of false since 4 is not strictly equal to '4')
*/

console.log(4 > 3 && 10 < 12); 
console.log(4 > 3 && 10 > 12); 
console.log(4 > 3 || 10 < 12); 
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3)); 
console.log(!(4 < 3)); 
console.log(!(false)); 
console.log(!(4 > 3 && 10 < 12)); 
console.log(!(4 > 3 && 10 > 12)); 
console.log(!(4 === '4')); 



//6. Write a script that prompts the user to enter base and write another prompt for height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*let base = prompt("Enter the base of the triangle:");
let height = prompt("Enter the height of the triangle:");

base = parseFloat(base);
height = parseFloat(height);

let area = 0.5 * base * height;

console.log("The area of the triangle is:" + area);*/




/*7. Using prompt, get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years. It should be like:

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.*/

/*let birthYear = prompt("Enter your birth year:");
let currentYear = new Date().getFullYear();

let Age = currentYear - birthYear;

if (Age >= 18) {
    console.log("You are:" + Age + ".You are old enough to drive.");
} else {
    let yearsToWait = 18 - Age;
    console.log("You are:" + Age + ".You will be allowed to drive after" + yearsToWait + "years.");
}*/




//8. let challenge = '30 Days Of JavaScript';
let challenge = "30 Days Of JavaScript";
console.log(challenge);

//9. Change all the string characters to capital letters using toUpperCase() method
challenge = challenge.toUpperCase();
console.log(challenge);

//10. Change all the string characters to lowercase letters using toLowerCase() method
challenge = challenge.toLowerCase();
console.log(challenge);

//11. Cut (slice) out the first word of the string using slice()
challenge = challenge.slice(3);
console.log(challenge);

//12. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let Challenge = "30 Days Of JavaScript";
Challenge = Challenge.slice (0, 3);
console.log(Challenge);

//13. Check if the string contains a word Script using includes() method
let challenge2 = "30 Days Of JavaScript";
challenge2 = challenge2.includes("Script");
console.log(challenge2);

//14. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let challenge3 = "30 Days Of JavaScript";
let IndexOfa = challenge3.indexOf("a");
console.log(IndexOfa);

//15. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

let LastIndexOfa = challenge3.lastIndexOf("a");
console.log(LastIndexOfa);

//16. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence = "You cannot end a sentence with because because because is a conjunction";
let IndexOfBecause = sentence.indexOf("because");
console.log(IndexOfBecause);

//17. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let challenge4 = "30 Days Of JavaScript";
let startwith = challenge4.startsWith("30");
console.log(startwith);

//18. Use endsWith() method with the string 30 Days Of JavaScript and make the result true

let endsWith = challenge4.endsWith("JavaScript");
console.log(endsWith);

//19. Generate a random number between 0 and 100 inclusively.

let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);

/*20  Declare variables named a & b, assign them to numbers. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
using if else
ternary operator*/
let a = 100; 
let b = 50;  

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}


let A = 50; 
let B = 75;  

let result = (A > B) ? "a is greater than b" : "a is less than b";
console.log(result);

/*21. Declare a variable named scores, Write a code which can give grades to students according to theirs scores and log it to the console:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let scores = 85; 

let grade;

if (scores >= 80 && scores <= 100) {
    grade = "A";
} else if (scores >= 70 && scores < 80) {
    grade = "B";
} else if (scores >= 60 && scores < 70) {
    grade = "C";
} else if (scores >= 50 && scores < 60) {
    grade = "D";
} else if (scores >= 0 && scores < 50) {
    grade = "F";
} else {
    grade = "Invalid score";
}

console.log("Grade:" + grade); 






