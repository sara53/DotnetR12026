// // var
// var fname = "ali";

// function getName() {
// 	console.log("Hello getName");
// }

// getName();
// --window;

// window.getName(); // caller -- window

// var person = {
// 	fname: "Ahmed",
// 	age: 20,
// 	display: function () {
// 		console.log("display");
// 	},
// };

// person.display(); // person
// getName(); //ali

// var person = {
// 	fname: "mona",
// 	age: 20,
// 	display: getName,
// };

// person.display(); //mona
// var fname = "ali";

// function getName() {
// 	console.log(this.fname); // window.fname
// }

// var person = {
// 	fname: "mona",
// 	age: 20,
// 	display: function () {
// 		console.log(this.fname); // person.fname
// 		getName(); // caller -- window
// 	},
// };

// person.display(); // person
// var person1 = {
// 	fname: "ahmed",
// 	age: 20,
// 	display: function (emoji, text) {
// 		console.log(`${this.fname} :   ${emoji}
//                 ${text}  ${this.age}`);
// 	},
// };
// var person2 = {
// 	fname: "Mona",
// 	age: 25,
// };
// person1.display("x","Y"); //person1

// person1.display.call(person1, ":)", "hello");
// person1.display.call(person2, "^_^", "ITI");
// console.log("=====================================")
// person1.display.apply(person1, [":)", "hello"]);
// person1.display.apply(person2, ["^_^", "ITI"]);
// console.log("====================================")

// var result = person1.display.bind(person1);

// var output = person1.display.bind(person2);
// console.log("-------------------------------");
// result("^_^", "hello");
// console.log("-----------------");

// output(":)", "ITI");
// var
// var fname = "ali";

// function getName() {
// 	console.log(this.fname); //person.fname
// }

// var person = {
// 	fname: "mona",
// 	age: 20,
// 	display: function () {
// 		getName.call(this);
// 	},
// };

// person.display();

console.log("============================");
// var fname = "ali";
// var person = {
// 	fname: "mona",
// 	display: function () {
// 		setTimeout(
// 			function () {
// 				console.log(this.fname);
// 			}.bind(this),
// 			2000
// 		);
// 	},
// };

// person.display();
// that pattern
// var fname = "ali";
// var person = {
// 	fname: "mona",
// 	display: function () {
// 		var that = this;
// 		setTimeout(function () {
// 			console.log(that.fname);
// 		}, 2000);
// 	},
// };

// person.display();
// function great() {
// 	var trackName = "Dotnet";
// 	var sup = "Ahmed";
// 	return function () {
// 		return trackName;
// 	};
// }

// var result = great();

// result();

// function count() {
// 	var count = 0;

// 	return function () {
// 		console.log(count++);
// 	};
// }

// var result = count();

// result();
// result();
// result();

// function getArr() {
// 	var arr = [];
// 	for (var i = 0; i < 3; i++) {
// 		arr.push(function () {
// 			console.log(i);
// 		});
// 	}
// 	return arr;
// }

// var result = getArr();

// result[0]();
// result[1]();
// result[2]();

// 0 1 2
// var person1 = {
// 	id: 1,
// 	name: "Ali",
// 	age: 20,
// 	address: "Alex",
// };
// var person2 = {
// 	id: 1,
// 	name: "Mona",
// };
// var person3 = {
// 	id: 1,
// };

// document.writeln(`<h1>${person1.name}</h1>`);
// document.writeln(`<h1>${person2.name}</h1>`);
// document.writeln(`<h1>${person3.name}</h1>`);
// // factory pattern
// function person(_id, _name, _age) {
// 	return {
// 		id: _id || "",
// 		name: _name || "",
// 		age: _age || "",
// 		display: function () {
// 			console.log(this.fname);
// 		},
// 	};
// }

// var p1 = person(1, "Ali", 20);
// var p2 = person(2, "Mona", 30);
// var p2 = person();

// console.log(p1);
// console.log(p2);
