// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"]

document.getElementById("spot00").innerText = cars;

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

document.getElementById("spot01").innerText = cars;

// Buy you can not reassign the array:
// cars = ["Toyota", "Volvo", "Audi"]; // Error

//You can create a const object:
const car = { type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property
car.owner = "Johnson";

// Buy you can not reassign the object:
// car =  { type:"Volvo", model:"EX60", color:"red"}; // Error

