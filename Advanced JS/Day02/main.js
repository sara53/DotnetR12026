/**
 * 	1- {}
	2- this - {}
	3- {}
*/

// // literal creation
// var product = new Object();

// console.log(product);
// var product = new Object();
// Object.prototype.display = function () {
// 	console.log("Hello display");
// };
// var product = { name: "book", price: 200 };
// var user = { name: "Ali", age: 20 };

// product.display();
// user.display();
// product.__proto__.display();

// console.log(product.__proto__);
// console.log(user.name);
// console.log(product.price);
// console.log(product.category);
// console.log(product.toString());
// console.log(product.__proto__ == Object.prototype);
// console.log(product.__proto__ == user.__proto__);

// console.log(Object.prototype);
// console.log(product.__proto__);
// console.log(user.__proto__);
console.log("==============================");

function Person(name, age, address) {
	this.name = name;
	this.age = age;
	this.address = address;
}

Person.prototype.trackName = "Dotnet";

var p1 = new Person("mona", 20, "alex");
var p2 = new Person("Ahmed", 30, "Cairo");

p1.__proto__.display = function () {
	console.log(`${this.name} ${this.age}`);
};

// p1.display();
// p2.display();
// console.log(p1.trackName);
// console.log(p2.trackName);
// console.log(p1);

// console.log(Person.prototype);

// console.log(p1.__proto__);
// console.log(p1.__proto__.__proto__.__proto__);
// console.log(Person.prototype == Object.prototype);
// console.log(Person.prototype.__proto__ == Object.prototype);
// console.log(p1.__proto__ == p2.__proto__);
// console.log(p1.__proto__ == Person.prototype);
// console.log(p1.__proto__ == Person.prototype);
// console.log(p2.__proto__ == Person.prototype);
// console.log(p2.__proto__ == p1.__proto__);

// var arr = []; // new Array()

// // override
// Array.prototype.push = function () {
// 	console.log("Hello push method");
// };

// arr.push("ali"); //

// console.log(arr);

// console.log(Array.prototype.__proto__);
// console.log(arr.push("hello"));
// function Person(name, age, address) {
// 	this.name = name;
// 	this.age = age;
// 	this.address = address;
// }

// Person.prototype.display = function () {
// 	console.log(`${this.name} ${this.age}`);
// };

// function User(name, age, address, password) {
// 	Person.call(this, name, age, address);
// 	this.password = password;
// }
// User.prototype = Object.create(Person.prototype);
// User.prototype.constructor = User;
// User.prototype.generatePass = function () {
// 	return this.password.toUpperCase() + " @#$$";
// };
// User.prototype.display = function () {
// 	console.log("new Display");
// };
// var myUser = new User("ali", 20, "Alex", "ali");
// myUser.display();
// console.log(myUser);
// var p3 = new Person("Ahmed", 30, "alex");
// p3.display();
// console.log(myUser);
// console.log(myUser.generatePass());
// console.log(Person.prototype);

// var product = {
// 	name: "book",
// 	price: 200,
// };

// let result = Object.create(product);

// result.test = "hello";

// console.log(result);

// function calcArea(shape) {
// 	if (shape.type == "circle") {
// 		return Math.PI * shape.r * 2;
// 	}
// 	if (shape.type == "square") {
// 		return shape.l * shape.l;
// 	}
// }

// console.log(calcArea({ type: "circle", r: 1 }));
// console.log(calcArea({ type: "square", l: 2 }));
// calcArea({ type: "rectangle", w: 2, h: 2 });
// function Person(name, age) {
// 	// private member
// 	var id = 233;
// 	this.name = name;
// 	this.age = age;
// 	// closure
// 	this.getId = function () {
// 		return id;
// 	};
// 	this.setId = function (value) {
// 		id = value;
// 	};
// }

// var p1 = new Person("ali", 20);

// p1.setId(123);
// console.log(p1.getId());
// // set
// p1.name = "Alaa";
// // get
// console.log(p1.name);
