// var fname = "ali";

// console.log(fname);
// console.log(window.fname);

// function show() {
// 	// function scope
// 	for (var i = 0; i < 3; i++) {
// 		console.log(i);
// 	}

// 	console.log(" i outside loop is  :", i);
// }

// show();

// scope -- function scope -- global scope
// console.log(fname);
// var fname = "ali";
// console.log(fname);
// var fname = "ali";
// var fname = 10; // redeclare
// console.log(fname);
// var fname = "ali";
// fname = "alaa";
// fname = 10;
// fname = true;
// console.log(fname);
/** let */

// let fname = "ali";

// console.log(window.fname); // undefined
// fname -- TDZ -- temp dead zone -- before initlization
// access

// closure -- arr -- function 0 1 2 (let) -- (block scope)
// i cousre  0 , 1,2
// function show() {
// 	let trackName = "dotnet";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(trackName); //
// 		console.log(i);
// 	}
// 	// console.log(" i outside : ", i);
// }

// show();
// console.log(fname);
// let fname = "ali";
// console.log(fname);
// let fname = "ali";
// let fname = 10;
// console.log(fname);
// let fname = "ali";
// fname = "alaa";
// fname = true;
// fname = {};

// console.log(fname);

// const

// console.log(PI); //
// const PI = 3.14;

// console.log(window.PI);
// console.log(PI);

// array -- collection of data
// reference datatype

// const arr = ["ali", "ahmed"];
// // arr = 3; // Error
// // arr = []; // Error
// arr.push("Mona");

// console.log(arr); //
// const person = { fname: "Ali" };

// person.fname = "alaa";

// person = {}; // change reference -- Error
// console.log(person); //
// const -- CAPITAL
// const PI = 3.14;

// PI = 2;

// console.log(pi);
/** Spread operator */
// let [x, y] = ["alaa", "Hoda"];

// let x = arr[0];
// let y = arr[1];

// destructing
// let [, , z] = arr;

// console.log(" x : ", x);
// console.log(" y : ", y);
// console.log(" z : ", z);
// let arr = ["mona", "ali", 123];
// function useState(value) {
// 	return [
// 		value,
// 		function () {
// 			console.log("hello");
// 		},
// 		123,
// 	];
// }

// let [x, y] = useState([1, 2, 3]);

// console.log("x : ", x);
// // console.log("y : ", y);

// y();
// --------------------
// function show([x, y]) {
// 	console.log(x);
// 	console.log(y);
// }

// show(["mona", "ali", 123]);

//----------------------------------
// let x = person.fname;
// let y = person.color;
//let person = { fname: "Ahmed", age: 20, color: "red", product: [1, 2, 3] };

// let { fname: x, color: y } = person;
// let { fname: fname, color: color } = person;
// let { fname, color, product } = person;

// console.log(fname);
// console.log(color);
// console.log(product);

// let response = {
// 	status: 200,
// 	data: [
// 		{ id: 1, name: "ali" },
// 		{ id: 2, name: "ahmed" },
// 		{ id: 3, name: "Mona" },
// 	],
// };

// // alias response --
// let { data: users } = response;

// console.log(users);
// spread operator
// let arr1 = ["ahmed", "mona", 123, true];
// let arr2 = [...arr1]; //

// arr1.push("dotnet");

// console.log("arr 1 :", arr1);
// console.log("arr 2 :", arr2);

// let data = ["mona", 123];
// // response from any api
// function showData(x, y) {
// 	console.log(x);
// 	console.log(y);
// }

// showData(...data); // show("mona",123)
// showData("ahmed", 55);
// showData(...data); // showData("mona",123)
// let person1 = {
// 	fname: "ahmed",
// 	age: 20,
// 	color: 200,
// };

// function showData(x, y) {
// 	console.log(x, y);
// }
// showData(...person1);
// not working -- person not iterable --
// let person2 = { ...person1 };
// console.log(person1);
// console.log(person2);
// default value in es6
// function add(x = 0, y = 0) {
// 	console.log("x :", x);
// 	console.log("y :", y);
// }

// add();
// rest
// function add(x, y, ...z) {
// 	console.log("x :", x);
// 	console.log("y :", y);
// 	console.log(z);
// }

// add("mona", true, 123, "hello");
// function add(...rest) {
// 	console.log(rest);
// }

// add("mona", true, 123, "hello");
// let [x, ...y] = ["mona", 123, true];

// console.log("x : ", x);
// console.log("y : ", y);
/**
 *  == function expression
 *  == function statement
 *  == arrow function
 * -------------------------------
 *  == anynmous function
 *  == callback function
 *  == IIFE function
 *  == constructor function

 */
// statement

// function sum(x, y) {
// 	return x + y;
// }
// // expression
// let add = function (x, y) {
// 	return x + y;
// };
// // arrow function
// let add2 = (x, y) => {
// 	return x + y;
// };

// let sayHello = () => console.log("Hello function");

// let square = (x) => x * x;

// let sum = (x, y) => x * x;

// let execute = (x, y) => {
// 	console.log("hello execute");
// 	return x + y;
// };
// bind -- that pattern -- arrow function
// this - window
// var fname = "ahmed";

// let person = {
// 	fname: "ali",
// 	display: function () {
// 		setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display(); // person

// let result = itiTracks.some((value) => value.startsWith("S"));

// console.log(result);
//false

// let arr = [10, 30, 40, 60, 12];

// let result = arr.find((item) => item > 25);
// let result = arr.findIndex((item) => item > 25);

// console.log(result);

// elemnt
// js engine

// function findElement(value, index, arr) {
// 	console.log("value : ", value);
// 	console.log("index : ", index);
// 	console.log("arr : ", arr);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 20) return arr[i];
// 	}
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);

// 	console.log("---------------");
// }
// [] length =  4
// let result = itiTracks.map(function (track, index) {
// 	return {
// 		id: index,
// 		name: track,
// 	};
// });

// // for (let i = 0; i < result.length; i++) {
// // 	document.body.innerHTML += result[i];
// // }

// console.log(result);
// let itiTracks = ["Dotnet", "Front", "OS", "PD"];

// // forEach -- map
// let result = itiTracks.forEach((value, i, arr) => {
// 	console.log(`Hello ${value} at ITI`);
// });

// console.log(result);
// let products = [
// 	{
// 		id: 1,
// 		name: "Book",
// 		price: 200,
// 		category: "school",
// 	},
// 	{
// 		id: 2,
// 		name: "Pen",
// 		price: 400,
// 		category: "school",
// 	},
// 	{
// 		id: 3,
// 		name: "Watch",
// 		price: 4000,
// 		category: "electronics",
// 	},
// 	{
// 		id: 4,
// 		name: "Phone",
// 		price: 6000,
// 		category: "electronics",
// 	},
// 	{
// 		id: 5,
// 		name: "Notebook",
// 		price: 6000,
// 		category: "school",
// 	},
// ];

// let result = products.filter((product) => product.category != "school");

// console.log(result);
