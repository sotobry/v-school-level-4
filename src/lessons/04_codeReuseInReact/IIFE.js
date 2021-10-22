//An IIFE (Immediately Invoked Function Expression) is a JS function that runs as soon as it is defined.

// (function() {
//   statement
// })();


//Contains 2 major parts:

//1) The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

//2) The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

(function() {
  let text = 'hello';
  console.log(text);
})();

const makeWithdraw = balance => (function(copyBalance) {
  let balance = copyBalance; //This variable is private
  let doBadThings = function() {
    console.log('I will do bad things with your money');
  };
  doBadThings();
  return {
    withdraw: function(amount) {
      if (balance >= amount) {
        balance -= amount;
        return balance;
      }
      else return "Insufficient money";
    }
  };
})(balance);

const firstAccount = makeWithdraw(100);
console.log(firstAccount.balance);
console.log(firstAccount.withdraw(20));
console.log(firstAccount.withdraw(30));
console.log(firstAccount.doBadThings);

const secondAccount = makeWithdraw(20);
console.log(secondAccount.withdraw(30));
console.log(secondAccount.withdraw(20));

