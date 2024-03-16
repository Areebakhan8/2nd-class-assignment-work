"use strict";
//variable decleared with const its never change after declearing this value are fixed.
console.log("TITLE:");
const Title = "Variable";
console.log(Title);
//variable decleared with var can be redecleared and reassigned this value can be update
console.log("DEFINATION:");
var defination = "Variable are used to store diffrent type of data in typescript";
console.log(defination);
var newMessage = "variables are decleared using the let, var, const keyword";
console.log(newMessage);
//variable decleared with let cannot be redecleared but can be reassigned
console.log("FAVOURITE COLOUR");
let favouritecolor = "Blue";
console.log(favouritecolor);
favouritecolor = "Green";
console.log(favouritecolor);
console.log("FAVOURITE DISH");
let favouritedish = "Biryani";
console.log(favouritedish);
favouritedish = "pizza";
console.log(favouritedish);
//Data types
//string:string are value that are inside the inverted qoumas like("" or '')
//this representing textual data inside inverted qoumas will be consider as string.
let Name = "Areeba Khan";
console.log("STRING:" + Name);
//Number:number type is fundamental for representing numeric data
// and performing methematical operation with in javascript programs
let number = 124;
console.log("NUMBER:" + number);
//Any:This type represent any type of data like email,adress or other type of data
let city = "karachi";
console.log("ANY:" + city);
//Boolean:the boolean type represent a logical value that can be either true or false
//booleans commonly used for conditios, comparisons and logical opretors
let amnaHere = false;
console.log("BOOLEAN:" + amnaHere);
//strong typing:in typescript asinging a data types to a variable on the time of decleartin is known as strong typing
//declearing and initializing variable with strong typing
let username = "Areeba khan";
console.log("USERNAME:" + username);
let password = 1234;
console.log("PASSWORD:" + password);
let email = "areebanabeel123@gmail.com";
console.log("Email:" + email);
let isStudent = true;
console.log("isStudent:" + isStudent);
let firstname = "Areeba";
let lastname = "khan";
let fullname = `${firstname}${lastname}`;
console.log("MY_NAME:" + fullname);
let name1 = "AREEBA";
let name2 = "KHAN";
let my_Name = name1 + "" + name2;
console.log("NAME:" + my_Name);
