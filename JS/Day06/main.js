// location object
// function execute() {
// 	// location.reload();
// 	// location.assign("https://www.google.com/");
// 	// location.replace("https://www.google.com/");
// 	// console.log(location.port);
// 	// console.log(location.protocol);
// 	// location.pathname = "about.html";
// 	// console.log(location.pathname);
// 	// location.href = "https://www.google.com/";
// 	// console.log(location.href);
// }

/// history
// == length
/**
 * == forward()
 * == back()
 * == go()
 */

// // js
// function successCB(position) {
// 	console.log(position.coords.latitude);
// 	console.log(position.coords.longitude);
// 	console.log("Allow function");
// }

// function errorCB() {
// 	console.log("user reject to access his location");
// }

// navigator.geolocation.getCurrentPosition(successCB, errorCB);
var xhr = new XMLHttpRequest();
// var myTable = document.getElementsByTagName("tbody")[0];
// var data;
// function getAllUsers() {
// 	xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// 	xhr.send();
// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState == 4) {
// 			if (xhr.status == 200) {
// 				{
// 					var response = xhr.response;
// 					data = JSON.parse(response);
// 					console.log(data);
// 					for (var i = 0; i < data.length; i++) {
// 						myTable.innerHTML += `<tr>
//                         <td>${data[i]["id"]}</td>
//                         <td>${data[i]["title"]}</td>
//                         <td>${data[i]["body"]}</td>
//                         <td><button >delete</button></td>

//                         </tr>
//                         `;
// 					}
// 				}
// 			}
// 		}
// 	};
// }
// cookies

// //

// // document.cookie = "username=ali"; //set
// // document.cookie = "password=123"; //set
// // console.log(document.cookie);

// // date in js

// // console.log(date.getFullYear());
// // console.log(date.getMonth());
// // console.log(date.getDate());
// // console.log(date.getDay());
// var date = new Date();

// date.setDate(date.getDate() + 3);

// // document.cookie = `password=123;expires=${date}`;
// // document.cookie = `password=54312;expires=${date}`;

// function saveCookie(key, value) {
// 	document.cookie = `${key}=${value};expires=${date}`;
// }

// saveCookie("colors", JSON.stringify([1, 4, 5]));
// saveCookie("address", JSON.stringify({ city: "alex", code: 123 }));
// var expireDate = new Date();
// expireDate.setDate(expireDate.getDate() - 1);

// function hasCookie(key) {}

// function deleteCookie(key) {
// 	document.cookie = `${key}=null;expires=${expireDate}`;
// }

// function getAllCookies(key) {
// 	return document.cookie;
// }
// function getCookie(key) {}
