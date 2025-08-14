// var product = {
// 	name: "book",
// 	price: 200,
// };

// Object.defineProperty(product, "category", {
// 	value: "school",
// 	writable: true,
// 	configurable: true,
// 	enumerable: true,
// });

// product.category = "pet";

//delete product.category;
// console.log(product);
// console.log(product.name);

// delete product.name;

// for (var i in product) {
// 	console.log(i);
// }

// function Person(name, age) {
// 	var id = 123;
// 	this.name = name;
// 	this.age = age;
// 	Object.defineProperty(this, "idHandler", {
// 		get: function () {
// 			return id;
// 		},
// 		set: function (value) {
// 			id = value;
// 		},
// 	});
// }

// var p1 = new Person("mona", 20);

// p1.idHandler = "new Id";
// console.log(p1.idHandler);

// function Person(name, age) {
// 	if (this.constructor == Person) {
// 		throw new Error("can not take an object from abstract class");
// 	}
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.display = function () {
// 	throw "Method is not implemented";
// };
// function User(name, age, password) {
// 	Person.call(this, name, age);
// 	this.password = password;
// }

// User.prototype = Object.create(Person.prototype);
// User.prototype.constructor = User;
// User.prototype.display = function () {
// 	console.log("hello display");
// };
// User.prototype.generatePassword = function () {
// 	console.log("Generate Password");
// };

// var myUser = new User();
// // myUser.display();

// function Product() {}

// Product.myStaticMethod = function () {
// 	console.log("Hello static method");
// };

// Product.myStaticMethod();
