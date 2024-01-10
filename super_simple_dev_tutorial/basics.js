// Youtube url - https://youtu.be/SBmSRK3feww
// Javascript makes our website interative and dynamic
console.log("Hello World");

//The below line of code will give a pop up alert message with the text Hello world
alert("Hello world");

//alert'Hello world'); will give error as below
//Uncaught SyntaxError: Unexpected string

let nickName = "Rick";
console.log(nickName);

//document.body.innerHTML = "<h3> Hi! Good morning!</h3>";

//Javascript has the trouble of storing floats

console.log(0.1 + 0.2);
//0.30000000000000004

//How to avoid this problem?
//Best practive when doing arithmetic operations on money = calculate in cents instead of dollars
//(2095 cents + 799 cents)/10 = 28.94 dollars

//How to round a number?
console.log(Math.round(2.5));

//Celsius to Fahrenheit
//The temperature is -5 degrees Celsius. Calculate the temperature in Fahrenheit
let celsius = -5;
console.log((celsius * 9) / 5 + 32);

//String concatenation
console.log("Vishwa" + " " + "dharani");

//How to find the type of a data?
console.log(typeof 42);

//Type coercion in Javascript
console.log("Rikato #" + 1);

//Use double quotes to represent a string if u want to use single quotes inside the string or use escape character
console.log("Rikato's real name is R.Aravinthan");

//We can use back ticks ` to declare a string
//It is called as template string and have a special feature called interpolation
//Interpolation is the process of evaluating an expression or variable inside a string
console.log(`Items (${1 + 1}): $${(2095 + 799) / 100}`);

//Single quotes vs Back ticks: Use back ticks only when inserting an expression or vairable inside a string
