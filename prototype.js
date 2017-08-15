function NumVal() { this.value = 42; };
NumVal.prototype = {
    precision: function() { return 2; },
    base: 10
};

function IntVal() {};
IntVal.prototype = new NumVal();
IntVal.prototype.somestring = 'Hello World';
IntVal.prototype.precision = 0;

var test = new IntVal();
console.log(test.base); // 10

console.log(test.hasOwnProperty("base")); // FALSE
test.base = 2;
console.log(test.base) // 2, this is the member property of 'test'
console.log(test.hasOwnProperty("base")); // TRUE

console.log(NumVal.prototype.hasOwnProperty("value"));
// false, because the prototype object defined on line 2, doens't have a direct property named "value"

console.log(IntVal.prototype.hasOwnProperty("value"));
// true, because IntVal.prototype is an instance object of NumVal, when this is created, the cosntructor on line 1 will add a direct property 'value' to this instance object


// Constructor
// This is a function, any function in JS can be a constructor, it simply needs to be called with the 'new' keyword.
function demo_constructor() {
    function Method() {}
    var obj1 = Method() // when executed as a normal function, it returns undefined
    console.assert(obj1 === undefined);
    var obj2 = new Method(); // when called with 'new', it behaves like a constructor, which returns a new standalone object
    console.assert(typeof obj2 === "object");
};

demo_constructor();


// Check prototype
// Every object has an internal [[constructor]] property, and this property is tracked up the propertype chain. This is what enables the 'instanceof' keyword.
function check_prototype() {
    console.assert(test instanceof IntVal);
    console.assert(test instanceof NumVal);
    console.assert(test instanceof Object);
}
check_prototype();
