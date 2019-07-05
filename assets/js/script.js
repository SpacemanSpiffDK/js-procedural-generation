// JS by Dan Høegh
// UCN MMD 2018

window.onload = function(){

	let a = 0;
	let b = 1;
	let c = 0;
	let keys = 1000;
	let startPoint = 1000;
	let table = [];


	for (let i = 0; i < keys + startPoint; i++) {
	  c = a + b;
	  a = b;
	  b = c;
	  if (!(Number.isSafeInteger(b))) {
	    b = Math.floor(b / i);
	  }
	  if (i > startPoint) {
		table.push(getDigits(" " + b));
	  }
	}

	function getDigits(str) {
	  str = str.substr(str.length - 3, 3);
	  return str;
	}

	document.querySelector('.output').innerHTML = table;
}