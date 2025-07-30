// v1
// var div = document.getElementById("parent");
// var element = document.createElement("p");

// element.innerHTML = "Hello dotnet";

// element.classList.add("jsClass");

// element.setAttribute("id", "info");

// function addNewElement() {
// 	div.appendChild(element);
// }
// v2
// var div = document.getElementById("parent");
// var element = document.createElement("p");
// var span = document.createElement("span");
// var text = document.createTextNode("hello dotnet");

// span.append("welcome Span");
// element.append(text);

// console.log(span);
// console.log(element);
// function addNewElement() {
// 	var result = div.append(element, span);
// 	console.log(result);
// }
// var div = document.getElementById("parent");
// var h1 = div.firstElementChild;
// var element = document.createElement("p");
// var span = document.createElement("span");
// var text = document.createTextNode("hello dotnet");

// span.append("welcome Span");

// element.append(text);

// console.log(span);
// console.log(element);
// function addNewElement() {
// 	h1.remove();
// 	// div.append(element);
// 	// h1.before(element);
// 	// h1.after(element);
// 	// document.body.insertAdjacentElement;
// }

// 2- attach function
// var p = document.getElementById("p1");
// var btn = document.getElementById("btn1");

// function changeText(e) {
// 	console.log(e.target);
// 	p1.innerHTML = "Hello Dotnet";
// }
// //
// function changeStyle(color) {
// 	p1.style.background = color;
// }

// // changeText({}) // jsEngine
// btn.onclick = changeText;
// callback function
// btn.onclick = function () {
// 	changeStyle("red");
// }; // changeStyle()
// btn.onclick = function () {
// 	changeText();
// 	changeStyle();
// };
// btn.onclick = changeStyle; //override
// btn.ondblclick = changeStyle;

// var person = {
// 	fname: "ali",
// };

// person.fname = "mona";
// person.fname = "hoda"; //override

// person.onclick = changeText();

// console.log(person);

// person.onclick();
// console.log(person);

// function greet(x) {
// 	console.log(x);
// }

// greet({ fname: "alaa" });
// var p = document.getElementById("p1");
// var btn = document.getElementById("btn1");

// function changeText(e) {
// 	console.log(e.target); // event object
// 	// console.log(e.target);
// 	p1.innerHTML = "Hello Dotnet";
// }

// function changeStyle() {
// 	p1.style.background = "green";
// }
// callback

// btn.addEventListener("click", function () {
// 	p.style.background = "red";
// });
// btn.removeEventListener("click", function () {
// 	p.style.background = "red";
// });
// btn.addEventListener("click", changeStyle);
// btn.addEventListener("click", changeText);

// btn.removeEventListener("click", changeStyle);

// form events

// var input = document.getElementById("input1");
// var btn = document.getElementById("btn1");
// var errorMsg = document.getElementById("errorMsg");

// input.addEventListener("focus", function () {
// 	input.style.border = "3px solid blue";
// });
// input.addEventListener("blur", function () {
// 	input.style.border = "3px solid orange";
// });
// input.addEventListener("input", function () {
// 	if (input.value.length >= 3) {
// 		input.style.border = "3px solid green";
// 		errorMsg.style.display = "none";
// 	} else {
// 		input.style.border = "3px solid red";
// 		errorMsg.style.display = "block";
// 	}
// });

// function login(e) {
// 	e.preventDefault();
// 	console.log(input.value);
// }
// function first(e) {
// 	console.log("First");
// }
// function second(e) {
// 	e.stopPropagation();

// 	console.log("Second");
// }
// function third(e) {
// 	// e.stopPropagation();
// 	console.log("Third");
// }
