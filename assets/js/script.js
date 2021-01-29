// JS by Dan Høegh
// UCN MMD 2019

let proceduralTable = [];
let performanceText;
const startPoint = 15;

const js = {
	procedural: {
		init: function(keys){
			let t0 = performance.now();
			let a = 0;
			let b = 1;
			let c = 0;

			for (let i = 0; i < keys + startPoint; i++) {
				c = a + b;
				a = b;
				b = c;
				if (!(Number.isSafeInteger(b))) {
					b = Math.floor(b / i);
				}
				if (i > startPoint) {
					proceduralTable.push(js.procedural.get3Digits(" " + b));
				}
			}
			let t1 = performance.now();
			document.querySelector("#performance").innerHTML = `Generation of ${keys.toLocaleString()} numbers took ${Math.round(t1 - t0)} milliseconds`;
		},
		get3Digits: function(str){
			str = str.substr(str.length - 3, 3);
			return str;			
		},
		get: function(i){
			return proceduralTable[i];
		},
		generate: function(keys){
			js.procedural.init(keys);
			let str = "";
			for (let i = 0; i < keys - 1; i++){
				str += js.procedural.get(i) + " ";
			}
			document.querySelector('#output').innerHTML = str;
		}
	}
}

js.procedural.generate(100000);