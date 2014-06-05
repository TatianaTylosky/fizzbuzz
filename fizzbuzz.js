$(document).ready(function() {

	var fizzbuzz = function(num) {

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

	};

	console.log( "ready!" );
	var nth = prompt("Until nth number of fizzbuzz?");
	nth = Number(nth);
	console.log(nth);
	
	while (isNaN(nth)) {
		nth = prompt("Until nth number of fizzbuzz?");
	}

	var sequence = [];
	fizzbuzz(nth);



	document.getElementById("fizzbuzz").innerHTML += sequence;

});
