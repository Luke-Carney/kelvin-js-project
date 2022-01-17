// setting a variable called Kelvin to 293
const kelvin = 293 
// converting kelvin to Celsius
const celsius = kelvin - 273;
// converting Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//rounding down fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degress in Fahrenheit`);

let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees in Newton`);