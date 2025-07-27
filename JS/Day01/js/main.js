// varaible -- container in memory
// c# == js

/**----------------------------------
 * Datatypes
 * ------------------------------------
 * == Primitive datatype
 * -----------------------------------
 * == string
 * == number
 * == boolean
 * == undefined
 * == null
 *---------------------------------------
    === refernce datatype
    == Object 
 *
 */
// var fname = "v";
// console.log(typeof fname);

// var num = 10;

// console.log(typeof num);
// var num2 = 10.25;

// console.log(typeof num2);
// var flag = true;

// var student = { id: 1, name: "alaa" };
// console.log(typeof student);
// varaible rules --
//
// var fname = 10;
// var firstname = 10;
// // camelCase
// var firstName = 10;
// var firstSecond = 10;
// var firstSecondThird = 10;

// valid name -- not a clean code

// var age = 10;

// var fname = 10; // number
// console.log(typeof fname); // number

// fname = "ali"; // working
// console.log(typeof fname); // string
// fname = true;
// console.log(typeof fname); // boolean

// var fname = "mona";

// var fname = 10;

// console.log(fname);
// undefined
// var fname;

// console.log(fname);

// console.log(typeof fname);
// fname = "Ali "; // working

// console.log(fname); // ali
// console.log(typeof fname); // string

// typeof null -- object --
// jsEngine
// var student = null; // {} empty object -- object
// student = "ali";
// console.log(student); // null
// console.log(typeof student); // null

// send requrst to api
// product

// var product = null; // standrad

// // reassign == null
// // before getting response
// product = { id: 1, name: "Book" };

// dom
// select p from dom --> null
// var fname = "ali";
// var fname = String("alaa");

// console.log(fname);
// console.log(typeof fname); //string

// convert from number to string
// // use String Method
// var x = 10;

// console.log(x);
// console.log(typeof x); // number

// var y = String(10); // jsEngine- coercion(casting)
// console.log(y);

// // console.log(y); // 10
// console.log(typeof y); //string
// var x = 10;

// var x = Number("20"); // coercion

// console.log(x);

// console.log(typeof x);

// var x = Number("mona"); // coercion -- string

// console.log(x); // NaN -- not a number - not a valid number

// console.log(typeof x); // number
/** falsy Values
 *  ==========================
 *  == false
 *  == 0
 *  == ""
 *  == null
 *  == NaN
 *  == undefined
 * -------------------------------------------------
 * == truthy values
 */

// var x = Boolean("mona");

// console.log(x);
// console.log(typeof x);
// ==  operator --
// 1- arithm (+,-,*,/)
/**
 * [+]
 * ---------------( JS Engine )---------------------
 *      == number + number == add
 *      == string + string == concat
 * --------------------------------------
    undefined + undefined   ===> NaN
    undefined + null        ===> NaN
    10 + undefined          ==> NaN
    number + null           ==> number
    null + null              ==> Zero
    number + NaN             ==> NaN
    number - NaN             ==> NaN


 */

// var x = 10; // number -- (coercion) == 10 == string

// var y = "10"; // string

// console.log(x + y);
// [-] == number - number = sub
// ----------------------------------------
// var x = "mona"; // string -- NaN -- number
// var y = 10; // number

// console.log(x - y); // NaN  --
/**----------------------------------------- *
 * / // // assignment operator =

// var fname = 10;
// com operators > , < , >= , <=

/**
 *      [==]       == (values only) (coercion)
 *      [===]      == (values && Datatype)
 */

// var x = "10"; // string -- Number("10") = 10

// // var y = 10; // number
// var x = "true"; // string -- Number("true") = NaN
// var y = true; // boolean - Number(true) == 1

// console.log(x == y); // false
// logical gates
// and
/**
 *  &&
 * ---------------------------
 * == true && true ==> true
 * == true && false ==> false
 * == false && true ==> false
 * == false && false ==> false
 *
 */
// OR
/**
 *  ||
 * ---------------------------
 * == true || true ==> true
 * == true || false ==> true
 * == false || true ==> true
 * == false || false ==> false
 *
 */

/**
 * Not
 * == !true  == false
 * == !false == true
 */

// ( 4 > 1 ) || ==> true
// (1>4 ) || secoond contion => output
// (1>2) && ==> false
// (3>1) && second Condition    ==> (true | false)

/** */

/**
 * == "mona" && "ali"
 * == true &&        ==> ali
 *
 *
 * --------------------
 *  0 && "alaa"     ==0
 *  false &&         ==> 0
 *
 */
