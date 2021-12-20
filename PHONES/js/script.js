// // // var x = "Hello world";
// // // console.log("global: message = " + x);

// // // function a () {
// // // 	var x = "a"
// // // 	console.log("a: message = inside " + x);
// // //     function b () {
// // //     	console.log("b: message = inside " + x)
// // //     	// body...
// // //     }
// // //    b();
// // // }

// // // a();


// // // var sum = 0
// // // for (var a = 0; a < 10; a+=2) {
// // // 	console.log(a);
// // // 	sum = sum + a
// // // }

// // // // console.log(sum)


// // // // var uni = new Object();
// // // // var name = "Name of university";
// // // // uni[name] = 'NEDUET';

// // // // console.log(uni[name]);

// // // // console.log("Name of university is " + uni[name]);

// // // // uni.deparment = "CIS";

// // // // console.log("Name of the department is " 
// // // // 	+ uni.deparment);

// // // // uni.deparment  = new Object();
// // // // uni.deparment.course = "CS116";

// // // // console.log(uni);

// // // var uni = {
// // // 	name: "NEDUET",
// // // 	department: {
// // // 		name: "CIS",
// // // 		fee: 60000,
// // //         courses: 6
// // // 	},
// // // 	year: "SE",
// // // 	"Student ID": "CS-20104"

// // // };  

// // // console.log(uni)


// // // function Q (q) {
// // // 	var a = function(x) {
// // // 		return q*x;
// // // 	};
// // // 	return a;
// // // }

// // // var W  = Q(7)
// // // console.log(W(7))

// // // var makethreetimes = Q(3)
// // // console.log(makethreetimes(100))

// // // function something(y, q) {
// // // 	return q(y);
// // // };

// // // var makehalf =  Q(0.5)
 
// // // function dosomething(x,y) {
// // // 	return y(x);
// // // };

// // // var e = dosomething(3,makehalf)
// // // console.log(e)

// // // var a = something(3,makethreetimes);
// // // console.log(a)

// // // function makeMultiplier(multiplier) {
// // //   var myFunFunc = function (x) {
// // //     return multiplier * x;
// // //   };
  
// // //   return myFunFunc;
// // // }

// // // var operation = makeMultiplier(10);
// // // console.log(operation(10));

// // // var x = 5;
// // // var y = x;
// // // x = 10;
// // // console.log(y);


// // function Square(sidelength) {
// // 	this.sidelength = sidelength;
// // }

// // Square.prototype.getArea =
// //   function() {
// //   	return Math.pow(this.sidelength,2)
// // };


// // var s = new Square(5)
// // console.log(s.getArea())


// // // ASSIGNMENT//
// // function Dog(name) {
// //   this.name = name;
// // }

// // Dog.prototype.bark = function () {
// //   console.log(this.name + " likes barking! Bark!");
// // }

// // var max = new Dog("Max", "Buddy");
// // max.bark();

// // // ARRAYS//

// // var An_Array = new Array();

// // An_Array[0] = "Zain"
// // An_Array[1] = function(name) {
// //   console.log("Hello " + name);	
// // };
// // An_Array[2] = 868
// // An_Array[3] = {Age:18,
// // fullname: "Muahmmad Zain Ul Abedin"};
// // An_Array[4] = "Something"

// // console.log(An_Array[1](An_Array[0]))


// // var names = ["Zain", "ul", "Abedin"];
// // var n = ""
// // for (var i = 0;  i < names.length; i++) {
// // 	console.log(n += ' '+ names[i]);
// // }

// // for (var name in names) {
// // 	console.log("hello " + names[name])
// // }

// // var counter = 0;
// // var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
// // for (var i = 0; i < myArray.length; i++) {
// //   counter++;
// // }
// // console.log(counter);

// // // Closures

// // function Q (W) {
// // 	// W = 2  due to 'Closure', stored vlaue!
// //    return (
// //    	function (X) {
// //    		return W*X;
// //    }
// //   ); 
// // }


// // var e = Q(2);

// // console.log(e(2))

// //var Greeter1 = {};
// //Greeter1.name = "Zain";
// //Greeter1.hello = function(name) {
// //	return ("hello " + name)
// //}
// //console.log(Greeter1.hello(Greeter1.name))

// //(function(window){
// //	var Greeter1 = {};
// //	Greeter1.name = "Zain";
// //	Greeter1.hello = function(){
// //	console.log("hello "+ Greeter1.name)
// //    };
// //    window.Greeter1 = Greeter1;
// //}(window));
// //
// //
// //(function(window){
// //	var Greeter2 = {};
// //	Greeter2.name = "Zain ul Abedin";
// //	Greeter2.hello = function(){
// //	console.log("hello "+ Greeter2.name)
// //    };
// //    window.Greeter2 = Greeter2;
// //}(window));
// //
// //
// //
// ///// Assignment ///
// // (function(window) {
// //
// // var obj = {};
// //
// // obj.dreamOn = function () {
// //  console.log("I want to see the global scope! Let me out!");
// // };
// //
// // window.doer = obj;
// // 
// // }(window));
// //
// // doer.dreamOn();


// /// ASSIGNMENT /////

// names = ["zain","john"];

// for (var name in names) {
// 	var i = names[name].charAt(0);
// 	console.log(i)
// 	if (i === "j") {
// 		console.log("GooodBye "+ names[name]);
// 	}
//     else {
//     	console.log("Hello " + names[name]);
// 		//console.log(names[name[0]]);
//     }
// }



