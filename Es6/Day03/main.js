// let x = Symbol(); //
// let y = Symbol();

// console.log(x == y);

// let Symbol.iterator = Symbol();

// let person = {
// 	fname: "Ali",
// 	[Symbol()]: function () {
// 		return {
// 			next: function () {
// 				return {
// 					value: "Dotnet",
// 					done: false,
// 				};
// 			},
// 		};
// 	},
// };

// person[x] = function () {};

// console.log(person[Symbol.iterator]().next());

// console.log(Object.keys(person));
// for --

// for (let key in person) {
// 	console.log(key, person[key]);
// }
// key -- value

// i == index
// for (let i in arr) {
// 	console.log(i);
// }

// value
// for (let value of arr) {
// 	console.log(value);
// }
// let iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// for (let value of arr) {
// 	console.log(value);
// }
// /**
//  *  == function == return {}
//  *  == {} has next function
//  * == next fun -- return {value,done}
//  *
//  *
//  */
// // let person = {
// // 	fname: "ali",
// // 	age: 30,
// // 	address: "Alex",
// // };

// // console.log(person);

// // for (let i of person) {
// // 	console.log(i);
// // }
// // let arr = ["mona", "ali", 123];
// // arr[Symbol.iterator] = generateEvenNumber;
// function generateEvenNumber() {
// 	let step = 0;
// 	return {
// 		next: function () {
// 			if (step >= 10) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return {
// 					value: (step += 2),
// 					done: false,
// 				};
// 			}
// 		},
// 	};
// }

// let product = {
// 	name: "Book",
// 	price: 200,
// 	category: "school",
// };

// // // generator fun
// // function* evenNumbers() {
// // 	for (let i = 0; i <= 10; i += 2) {
// // 		yield i;
// // 	}
// // }
// function* getObjValues() {
// 	for (let key in this) {
// 		yield this[key];
// 	}
// }

// let person = {
// 	fname: "Ali",
// 	age: 20,
// 	address: "Alex",
// };

// // person[Symbol.iterator] = generateEvenNumber;
// person[Symbol.iterator] = getObjValues;
// for (let x of person) {
// 	console.log(x);
// }
// console.log("------------------");
// product[Symbol.iterator] = getObjValues;
// for (let x of product) {
// 	console.log(x);
// }

/**===================================== */
// let arr = ["mona", "alaa", 123];

// arr[Symbol.iterator] = function () {
// 	let index = 0;
// 	console.log(this);
// 	return {
// 		next: () => {
// 			if (index == this.length) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return {
// 					value: this[index++],
// 					done: false,
// 				};
// 			}
// 		},
// 	};

// 	// code
// };

// for (let value of arr) {
// 	console.log(value);
// }
// super class -- parent class
// class Person {
// 	constructor(fname = "", age = "", address = "") {
// 		this.fname = fname;
// 		this.age = age;
// 		this.address = address;
// 	}
// 	display() {
// 		console.log(`${this.fname} ${this.age}`);
// 	}
// }

// // sub class - child class
// class User extends Person {
// 	constructor(fname = "", age = "", address = "", password) {
// 		super(fname, age, address);
// 		this.password = password;
// 	}

// 	generatePassword() {
// 		return this.password.toUpperCase() + "^$##";
// 	}
// }

// let myUser = new User("Ahmed", 30, "alhr");
// myUser.display();
// console.log(myUser);

/**====================== */
// // super class -- parent class
// class Person {
// 	#id;
// 	constructor(id = "", fname = "", age = "", address = "") {
// 		this.#id = id;
// 		this.fname = fname;
// 		this.age = age;
// 		this.address = address;
// 	}
// 	display() {
// 		console.log(`${this.fname} ${this.age}`);
// 	}

// 	get getId() {
// 		return this.#id;
// 	}

// 	set setId(value) {
// 		this.#id = value;
// 	}
// }

// let person1 = new Person(1, "mona", 20, "alex");

// person1.setId = "new ID";

// console.log(person1.getId);
// person1.setId("new ID");
// console.log(person1.getId());
// console.log(person1.#id);
// person1.fname = "Hoda"; // set
// console.log(person1.fname); // get
/**========================================== */
// class Person {
// 	constructor(fname = "", age = "", address = "") {
// 		this.fname = fname;
// 		this.age = age;
// 		this.address = address;
// 	}
// 	display() {
// 		// 100 line
// 		console.log(`${this.fname} ${this.age}`);
// 	}
// }
// class User extends Person {
// 	constructor(fname = "", age = "", address = "", password) {
// 		super(fname, age, address);
// 		this.password = password;
// 	}

// 	generatePassword() {
// 		return this.password.toUpperCase() + "^$##";
// 	}

// 	// override
// 	display() {
// 		super.display();
// 		console.log("new Code");
// 	}
// }

// let myUser = new User("Ahmed", 30, "alhr");
// myUser.display();
// console.log(myUser);
class Person {
	constructor(fname = "", age = "", address = "") {
		if (this.constructor == Person) {
			throw new Error("can not take an object from abstract class");
		}
		this.fname = fname;
		this.age = age;
		this.address = address;
	}
	display() {
		throw new Error("Method is not implemented");
	}
}

class User extends Person {
	constructor() {
		super();
	}
	display() {
		console.log("Hello ya display");
	}
}
let myUser = new User();
myUser.display();
// console.log(myUser);
// class Product {
// 	static myStaticMethod() {
// 		console.log("Hello Static MEthod");
// 	}
// }

// Product.myStaticMethod();
// // import x, { add, square } from "./script2.js";
// import * as all from "./script2.js";

// import express from "./express.js";

// let app = express(); //

// app.listen();
// function execute() {
// 	console.log(all.add(3, 4));
// 	console.log(all.square(3));
// 	all.default();
// }

// execute();

// export
// naming
// default

//

// let person = {
// 	fname: "ali",
// 	age: 20,
// };
