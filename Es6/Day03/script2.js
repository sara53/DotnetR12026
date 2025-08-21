let trackName = "Dotnet";
function add(x, y) {
	return x + y;
}
function square(x) {
	return x * x;
}

function connectDB() {
	console.log("Database connected");
}
export default function sayHello() {
	console.log("Welcome Dotnet");
}

export { add, square, trackName };
