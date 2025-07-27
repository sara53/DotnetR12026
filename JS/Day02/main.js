// params
// function statement -- declaration
// function sum(x, y) {
// 	x = x || 0; //
// 	y = y || 0;

// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	return x + y;
// }

// console.log(sum(3, 6));
// sum(3, 4);
// console.log(sum(3, 4));
// var result = sum(3, 4);

// console.log(result);

// sum("mona", "ali");

// sum(true, true);

// sum( "mona", 10 );

// sum([],{})
// sum();
// console.log("-----------");
// sum(3);
// console.log("------------");
// sum(10, 20, 40);
// arguments
// sum(3, 4);
// console.log("----------");
// sum(10, 5);

// display();

// var result = Number("10");

// console.log(result);
// console.log(sum(3, 4));
// function sum(x, y) {
// 	return x + y;
// }

// console.log("------------------");
// // function expression
// console.log(result(3, 5));
// // console.log(result);
// var result = function (x, y) {
// 	return x + y;
// };

// console.log(fname); //undefined
// var fname = "mona";
// console.log(fname); // mona
// var fname = "mona";

// function dotnet(sup) {
// 	console.log("hello dotnet ");
// 	console.log("your sup is , ", sup);
// }

// var mearn = function (sup) {
// 	console.log("hello mearn ");
// 	console.log("your sup is , ", sup);
// };
// console.log("----------------");
// function greet(myFun, superName) {
// 	myFun(superName);
// 	console.log("welcome at ITI");
// }

// greet(function (x) {
// 	console.log("hello dotnet at iti", x);
// }, "Ahmed");

// console.log("----------------");

// greet(function (x) {
// 	console.log("hello mearn at iti", x);
// }, "Alaa");
// function greet(myFun1, myFun2) {
// 	myFun1(function () {
// 		console.log("inner function 1");
// 	});
// 	console.log("------------");
// 	myFun2(function () {
// 		console.log("inner fun 2");
// 	});
// }

// greet(
// 	function (x) {
// 		x();
// 		console.log("Cb1");
// 	},
// 	function (y) {
// 		y();
// 		console.log("Cb2");
// 	}
// );
// var str = "username=ali;password=123";

// var result = str.split(";");
// console.log(result);
// // var result = str.slice(2);
// // console.log(result);
// console.log("Original ", str);

// console.log(`${str.trim()} ^_^ `);
// console.log(`${str.trimStart()} ^_^ `);
// console.log(`${str.trimEnd()} ^_^ `);

// var result = str.includes("llo");
// console.log(result);
// str[0] = "M"; // set -- immutable
// console.log(` dotnet ${str} ${str}

//             ^_^

//                 ITI ITI :)
//         `);
// console.log(str);
// for (var i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }
