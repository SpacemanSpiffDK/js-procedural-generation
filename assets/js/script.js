// JS by Dan Høegh
// UCN MMD 2018

window.onload = function(){

	var a = 0;
	var b = 1;
	var c = 0;
	var keys = 100000;
	var startPoint = 1000;
	var output = "";
	var str = "";

	for (var i = 0; i < keys + startPoint; i++) {
	  c = a + b;
	  a = b;
	  b = c;
	  if (!(Number.isSafeInteger(b))) {
	    b = Math.floor(b / i);
	  }
	  if (i > startPoint) {
	    str = " " + b;
	    output = output + getDigits(str, 3) + ", ";
	  }
	}

	function getDigits(str, amount) {
	  str = str.substr(str.length - amount, amount);
	  return str;
	}

	document.querySelector('.output').innerHTML = output;
}