# JavaScript_101

JavaScript variables can be declared in 4 ways:

- Automatically
- Using var
- Using let
- Using const

The var keyword was used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
The var keyword should only be used in code written for older browsers.

The const variables cannot be changed.

When to Use var, let, or const?
1. Always declare varaibles.
2. Always use const if the value should not be changed.
3. Always use const if the type should not be changed (arrays and objects).
4. Only use let if you can't use const.
5. Only use var if you must support old browsers.

After the declaration, the variable has no value (technically it is undefined):

let carName;

One statement, many variables

let person = "John Doe", carName = "Volvo", price = 200;

Also:

let person = "John Doe", 
carName = "Volvo", 
price = 200;

Re-Declaring
If you re-declare a JavaScript variable declared with var, it will not lose its value.

var carName = "Volvo";
var carName;

You cannot re-declare a variable declared with let or const. It will not work.

You can also add strings, but strings will be concatenated:

let x = "John" + " " + "Doe";

If you put a number in quotes, the rest of the numbers will be treated as strings, and conctenated:

let x = "5" + 2 + 3;

JavaScript Dollar sing $
Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:

let $ = "Hello world";
let $$$ = 2;
let $myMoney = 5;

Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.

In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery $("p"); meand "select all p elements".

Global scope
Variables declared with the var always have global scope.
Variables declared with the var keyword can not have block scope:

{
    let x = 2; // No global scope
    var y = 2; // Global scope
}

