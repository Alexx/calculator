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
var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: "));
var result = divide(number1,number2);
alert("The quotient of " + number1 + " / " + number2 + " = " + result + ".");

// BMI
var bodyMassIndex = function(weight, height) {
	return weight / (height * height) * 703;
};

var weight = parseFloat(prompt("Your weight in lbs: "));
var height = parseFloat(prompt("Your height in inches: "));
var result = bodyMassIndex(weight, height).toFixed(2);

alert("Your BMI is " + result);

// Temp Conversion

var convToFahrenheit = function(degreeCelcius) {
	return degreeCelcius * 1.8 + 32;
};

var degreeCelcius = parseInt(prompt("Temperature in Celcius: "));

var result = convToFahrenheit(degreeCelcius).toFixed(2);

alert("The temperature in Fahrenheit " + result);



var convToCelcius = function(degreeFahrenheit) {
	return (degreeFahrenheit - 32) / 1.8;
};

var degreeFahrenheit = parseInt(prompt("Temperature in Fahrenheit: "));

var result2 = convToCelcius(degreeFahrenheit).toFixed(2);

alert("The temperature in Celcius " + result2);
