//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JS, closures are created every time a function is created, at function creation time.

function init() {
  var name = 'Mozilla'; //name is local variable created by init
  function displayName() { //displayName() is the inner function, a closure
    console.log(name); //use variable declared in the parent function
  }
  displayName();
}
// init();

function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
// myFunc();

//A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));

// function makeSizer(size) {
// return function() {
// document.body.style.fontSize = size + 'px';
// };
// }

// document.getElementById('size-12').onClick = size12;
// document.getElementById('size-14').onClick = size14;
// document.getElementById('size-16').onClick = size16;

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() { return changeBy(1); },
    decrement: function() { return changeBy(-1); },
    value: function() { return privateCounter; }
  };
})();

// console.log(counter.value());
// counter.increment();
// counter.increment();
// console.log(counter.value());
// counter.decrement();
// console.log(counter.value());

//The shared lexical environment is created in the body of an anonymous function, which is executed as soon as it has been defined (also known as an IIFE, Immediately Invoked Function Expression).

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() { return changeBy(1); },
    decrement: function() { return changeBy(-1); },
    value: function() { return privateCounter; }
  };
};

var counter1 = makeCounter();
var counter2 = makeCounter();

// console.log(counter1.value());
counter1.increment();
counter1.increment();
// console.log(counter1.value());
counter1.decrement();
// console.log(counter1.value());
// console.log(counter2.value());


//CLOSURE SCOPE CHAIN

//Every closure has 3 scopes
//  Local scope (own scope)
//  Outer functions scope
//  Global scope

//global scope
var e = 10;
function sum(a) {
  return function(b) {
    return function(c) {
      //outer functi ons scope
      return function(d) {
        //local scope
        return a + b + c + d + e;
      };
    };
  };
}
console.log(sum(1)(2)(3)(4));


//CREATING CLOSURES IN LOOPS: A COMMON MISTAKE