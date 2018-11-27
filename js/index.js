// use this to copy code snippets or us your browser's console

function greet() {
  console.log(`my name is ${this.name}, hi!`);
}

let sally = { name: 'Sally' };

greet.call(sally);
// my name is Sally, hi!

greet.apply(sally);
// my name is Sally, hi!

function greet(customerOne, customerTwo) {
  console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

let sally = { name: 'Sally' };

greet.call(sally, 'Terry', 'George');
// Hi Terry and George, my name is Sally!

// The call to apply works similarly to call, except that apply only takes two arguments: the value of this, and then an Array of arguments to pass to the function, like so:



let sally = { name: 'Sally' };
 
function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}
 
let newGreet = greet.bind(sally); // newGreet is context-bound to sally
 
newGreet('Bob');
// Hi Bob, my name is Sally!

 