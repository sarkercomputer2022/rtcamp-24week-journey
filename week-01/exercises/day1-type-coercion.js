console.log("=== Type Coercion Challenges ===\n");

console.log("Problem 1:");
console.log("5" + 3);

console.log("Explanation: String + Number = String Concatenation\n");

console.log("Problem 2:");
console.log("10" - 5);

console.log("Explanation: String - Number = String Concatenation\n");

console.log("Problem 4:");
console.log("5"==5);
console.log("5" === 5);

console.log("Explantion: == converts types, ===doesn't\n");


console.log("Problem 5 ");
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(0));
console.log(Boolean(42));
console.log(Boolean(null));

console.log("Explanation: Falsy values = '', 0, null, undefined, NaN, false\n");

console.log("Bonus Challenge:");
console.log("10" + 2 + 5);      // 1025
console.log(10 + 2 + "5");      // 125
console.log("10" - 2 - 5);      // 3
console.log("xyz" + 2025);      // xyz2025

