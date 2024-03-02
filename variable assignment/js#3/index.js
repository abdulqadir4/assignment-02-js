// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 25;
alert("Your age is: " + age);

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page.
// Show his/her number of visits on your web page.
var visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);
document.write("I have visited this site " + visitCount + " times.");

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 1999;
document.write("<br>MY birth year is: " + birthYear);

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = "SADIQ SHAH";
var productTitle = "SWEAT SHIRTS";
var quantity = 10;
document.write("<br>" + visitorName + " ordered " + quantity + " " + productTitle + "(s) on QADIR'S Clothing Centre.");
