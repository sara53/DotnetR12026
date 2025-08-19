// let person = {
// 	fname: "ali",
// 	age: 20,
// 	color: "red",
// };

// let result = Object.entries(person);

// let output = result.map(([key, value]) => {
// 	return {
// 		key,
// 		value,
// 	};
// });

// console.log(output);
// let keys = Object.keys(person);
// let values = Object.values(person);
// console.log(values);
// for (let i = 0; i < keys.length; i++) {
// 	console.log(person[keys[i]]);
// }
// let person1 = {
// 	fname: "Ali",
// 	age: 20,
// };

// let person2 = {
// 	color: "red",
// };

// let result = Object.assign({}, person1, person2);

// console.log(result);

// function showData(options = {}) {
// 	let defaultValues = {
// 		fname: "default Name",
// 		age: "Default age",
// 		address: "Default Address",
// 	};
// 	Object.assign(defaultValues, options);

// 	console.log(`fname = ${defaultValues.fname}
//                 age =${defaultValues.age}
//                 address=${defaultValues.address}`);
// }

// // showData();
// showData({
// 	fname: "mona",
// });
// showData({
// 	fname: "mona",
// 	address: "alex",
// 	age: 20,
// });

// showData("ahmed", "alex", 20);
// showData("mona", 20, "alex");
// console.log("----------------------");
// showData("mona", 20);
// function first() {
// 	console.log("First ");
// 	second();
// 	console.log("End");
// }
// function second() {
// 	setTimeout(() => {
// 		console.log("Second ");
// 	}, 2000);
// 	console.log("After Settimeout execution");
// }

// first();

// setTimeout(() => {
// 	console.log("First");
// }, 0);

// console.log("Second");
// console.log("End");
// var x;
// setTimeout(() => {
// 	x = 10;
// }, 1000);

// console.log(x);
// send request to get product ids

// setTimeout(() => {
// 	var products;
// 	products = [100, 200, 300]; // ajax

// 	// Request 2
// 	var product;
// 	setTimeout(() => {
// 		product = {
// 			id: products[0], // ajax
// 			name: "Book",
// 			price: 200,
// 		};
// 		var price;
// 		setTimeout(() => {
// 			price = product.price; // ajax
// 			console.log(price);
// 		}, 500);
// 	}, 1000);
// }, 2000);

// pending
// fulfilled
//rejected
// ------------------------------
// js Engine
// let myPromise = new Promise(function (x, y) {
// 	//x("Dotnet"); //
// 	y("Error Msg"); //
// });

// myPromise
// 	.then(function (data) {
// 		console.log(data);
// 		console.log("Hello then");
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 		console.log("From Reject");
// 	});
function getAllProductIds() {
	let myPromise = new Promise(function (x, y) {
		var products;
		setTimeout(() => {
			products = [100, 200, 300];
			if (products) {
				x(products);
			} else {
				y("Error on getting Products Ids");
			}
		}, 2000);
	});

	return myPromise;
}

function getProductDetails(productId) {
	return new Promise((resolve, reject) => {
		var product = {
			id: productId,
			name: "Book",
			price: 300,
		};

		product ? resolve(product) : reject("Error on getting Product Details");
	});
}

function getProductPrice(product) {
	return new Promise((resolve, reject) => {
		var price = product.price;
		price ? resolve(price) : reject("Error on getting product price ");
	});
}

// async function execute() {
// 	try {
// 		let products = await getAllProductIds();
// 		let product = await getProductDetails(products[0]);
// 		let price = await getProductPrice(product);
// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();

// getAllProductIds()
// 	.then((productIds) => {
// 		return getProductDetails(productIds[0]);
// 	})
// 	.then((product) => {
// 		return getProductPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// getProductDetails(3)
// 	.then((product) => {
// 		console.log(product);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function getTrackName() {
// 	return "dotnet";
// }

// let result = getTrackName();

// result.then(console.log).catch(console.log);
