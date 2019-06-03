var add = function(number1,number2) {
	return number1 + number2;
}
var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: "));
var result = add(number1,number2);
alert("The sum of " + number1 + " + " + number2 + " = " + result + ".");

var subtract = function(number1,number2) {
	return number1 - number2;
}
//var number1 = parseInt(prompt("Enter a number: "));
//var number2 = parseInt(prompt("Enter another number: "));
var result = subtract(number1,number2);
alert("The difference of " + number1 + " - " + number2 + " = " + result + ".");

var multiply = function(number1,number2) {
	return number1 * number2;
}
//var number1 = parseInt(prompt("Enter a number: "));
//var number2 = parseInt(prompt("Enter another number: "));
var result = multiply(number1,number2);
alert("The product of " + number1 + " * " + number2 + " = " + result + ".");

var divide = function(number1,number2) {
	return number1 / number2;
}
//var number1 = parseInt(prompt("Enter a number: "));
//var number2 = parseInt(prompt("Enter another number: "));
var result = divide(number1,number2);
alert("The quotient of " + number1 + " / " + number2 + " = " + result + ".");
