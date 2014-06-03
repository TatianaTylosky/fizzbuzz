$(document).ready(function() {
console.log( "ready!" );

var nth = prompt("Until nth number of fizzbuzz?");

var sequence = [];

for (var num = 1; num <= nth; num++) {
	if (num%3 === 0 && num%5 === 0) {
		sequence.push("fizzbuzz");
	}

	else if (num%3 === 0){
		sequence.push("fizz");
	}

	else if (num%5 === 0){
		sequence.push("buzz");
	}

	else {
		sequence.push(num);
	}

}

	document.getElementById("fizzbuzz").innerHTML += sequences;

});