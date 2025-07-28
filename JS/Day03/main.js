// var trackName = "dotnet";
// function sum(x, y) {
// 	var trackName = "mearn"; //
// 	var supName = "ahmed";
// 	trackName = "mearn";
// 	console.log(trackName);
// }

// var result = sum(3, 4);

// console.log(supName);

// console.log(trackName);
// console.log(result);

// Error
//

// var trackName = "dotnet";
// function sum(x, y) {
// 	var trackName = "mearn"; //Shadwing
// 	var supName = "ahmed";
// 	console.log(trackName);
// }

// var result = sum(3, 4);

// console.log(supName);

// console.log(trackName);
// console.log(result);
// function sum(x, y) {
// 	console.log("sum Function");
// 	console.log(trackName);
// 	return x + y;
// }

// var result = sum(3, 4);

// console.log(result);

// function sum(x, y) {
// 	console.log(supName);
// 	var supName = "ali";
// 	console.log("sum Function");
// 	console.log(trackName);
// 	return x + y;
// }

// sum();

// undefined sum Error
// ali sum Error
//
// var dotnet = function (trackName) {
// 	console.log(`Hello ${trackName} `);
// };

// function greet(trackName) {
// 	console.log("welcome at ITI");
// 	return dotnet(trackName);
// }

// console.log(greet("mearn"));
/** Object
 * -------------
 * == props
 *  == Key : value (any datatype)
 * == methods
 */

// user defined object
// built in objects props methods
// all
// var x = "age";

//

// var fname = "x";
// var student1 = {
// 	fname: "ali",
// 	age: 25,
// 	address: {
// 		city: "alex",
// 		street: "21 saad str",
// 		code: 123,
// 	},
// 	// method
// 	display: function (emoji) {
// 		console.log(`${student1.fname} ${emoji}`);
// 		//return `welcome ${student1.fname} at ITI ${emoji}`;
// 	},
// };

// student1.display("^_^");

// var result = student1.display("^_^");

// console.log(result);
//
// props -- override

// student1["age"] = "30";
// // student1.fname = "alaa";

// student1["gender"] = "male";

// // //
// // student1.gender = "male";
// console.log(student1);

// console.log(student1.x); //

// console.log(student1[x]); // student1["age"]

// console.log(student1.gender); // undefined
// subscript
// console.log(student1["fname"]);
// console.log(student1["age"]);
// console.log(student1["address"]["city"]);
// console.log(student1.address.city);
// console.log(student1.address["city"]);
// console.log(student1["address"].city);
// var fname = student1.fname;
// get -- dot
// console.log(student1.fname);
// console.log(student1.age);
// console.log(student1.address);
// dot notation - subscript notation
// access Read -- write

// var arr = ["ali", true, 10, 30];

// console.log(arr.length); // prop

// arr.push('value') // length

// var person1 = { fname: "ali", age: 20 }; // 0X1f

// var person2 = person1; //

// //
// person1.gender = "male";
// console.log("Person1 :", person1);
// console.log("Person2 :", person2);

// var a = 4;

// var b = a; // primitive

// a = 6;

// console.log("a : ", a); // 6
// console.log("a : ", b); // 4
