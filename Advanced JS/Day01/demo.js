function Product(name, price) {
	this.name = name;
	this.price = price;
}

Product.prototype.discount = function () {
	console.log("hello discount");
};
console.log(Product.prototype);

var p1 = new Product("Book", 20);

var p2 = new Product("Pen", 100);

p1.discount();
p2.discount();
// console.log(p1.__proto__ == Product.prototype);

// console.log(p1.toString());
// var p2 = new Product("ahmed", 22);

// console.log(p1);
// console.log(p2);

// new -- fun constructor
/**
 *  1- create empty Object
 *  2- this -- {}
 *  3- return {}
 */
