# Week 1: JavaScript Fundamentals I - Learning Notes

**Dates:** October 18-24, 2025  
**Status:** 🟢 In Progress (Day 2/7 Complete)  
**Total Hours:** 4.5 hours

---

## Day 1 - Saturday, Oct 18, 2025

### Topic: JavaScript Variables

**Time Spent:** 2.5 hours  
**Status:** ✅ Completed

---

### 1. Variable Declarations (var, let, const)

**var - Old Way (Don't Use!)**
var name = "Subhash";
var name = "Venkata";

- Function scope
- Can redeclare and reassign
- Hoisted with value `undefined`
- **Never use in modern JavaScript**

**let - Modern Way**
let age = 25;
age = 26; // Can reassign - OK
// let age = 27;

- Block scope (`{}`)
- Cannot redeclare, can reassign
- NOT hoisted (temporal dead zone)
- **Use when you need to reassign**

**const - Best Practice**
const company = "TCS";
// company = "rtCamp"; // ERROR! Cannot reassign

- Block scope (`{}`)
- Cannot redeclare or reassign
- NOT hoisted
- **Use by default for everything**

---

### 2. Scope

**Block Scope (let, const)**
{
let blockVar = "Inside block";
console.log(blockVar); // Works
}
// console.log(blockVar); // ERROR! Outside block


**Function Scope (var)**
function test() {
var funcVar = "Inside function";
console.log(funcVar); // Works
}
// console.log(funcVar); // ERROR! Outside function

---

### 3. Hoisting

**var is hoisted:**
console.log(x); // undefined (not error!)
var x = 5;

**let/const NOT hoisted:**
// console.log(y); // ERROR! Cannot access before initialization
let y = 5;

---

### 4. Type Coercion

**String + Number = String**
"5" + 3 // "53" (concatenation)

**String - Number = Number**
"10" - 5 // 5 (subtraction)

**Boolean to Number**
true + 5 // 6 (true = 1)
false + 10 // 10 (false = 0)


**Equality**
"5" == 5 // true (loose, converts types)
"5" === 5 // false (strict, no conversion)

**Truthy/Falsy Values**
- Falsy: `""`, `0`, `null`, `undefined`, `NaN`, `false`
- Everything else is truthy

---

### Key Takeaways - Day 1
1. Always use `const` by default
2. Use `let` only when reassignment is needed
3. NEVER use `var` - it causes scope bugs
4. Use `===` instead of `==` for comparisons
5. Be aware of type coercion in operations

---

## Day 2 - Sunday, Oct 19, 2025

### Topic: JavaScript Functions

**Time Spent:** 2 hours  
**Status:** ✅ Completed

---

### 1. Function Declarations

**Syntax:**
function greet(name) {
return Hello, ${name}!;
}
console.log(greet("Subhash")); // Hello, Subhash!

**Key Points:**
- Uses `function` keyword
- **Hoisted** - can be called before declaration
- Has a name (named function)
- Traditional syntax

**When to use:** Need hoisting or prefer traditional syntax

---

### 2. Function Expressions

**Syntax:**
const square = function(x) {
return x * x;
};
console.log(square(5)); // 25

**Key Points:**
- Function assigned to a variable
- **NOT hoisted** - must be defined before use
- Can be anonymous (no name after `function`)
- Treated like any other value

**When to use:** Store functions in variables, pass as arguments

---

### 3. Arrow Functions (ES6+)

**Syntax:**
// One-liner (implicit return)
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

// Multi-line (explicit return needed)
const multiply = (a, b) => {
return a * b;
};

// Single parameter (parentheses optional)
const double = x => x * 2;

// No parameters
const sayHi = () => "Hello!";


**Key Points:**
- Shorter syntax than regular functions
- Implicit return for one-liners
- Does NOT have its own `this` context
- Cannot be used as constructors
- **Most modern** syntax

**When to use:** Short functions, array methods, callbacks

---

### 4. Default Parameters

**Syntax:**
function sayMessage(msg = "Hello there!") {
console.log(msg);
}

sayMessage(); // Hello there! (uses default)
sayMessage("Hi!"); // Hi! (uses provided value)

**Key Points:**
- Provide fallback values for missing arguments
- Works when argument is `undefined`
- Makes functions more flexible
- Can use expressions as defaults

**When to use:** Optional parameters with sensible defaults

---

### 5. Callback Functions

**Syntax:**
function processUserInput(callback) {
let name = "Subhash";
callback(name); // Execute the passed function
}

processUserInput(function(name) {
console.log(User is: ${name});
});
// Output: User is: Subhash

**Key Points:**
- Functions passed as arguments to other functions
- Called inside the receiving function
- Foundation for asynchronous programming
- Used in array methods (map, filter, forEach)

**When to use:** Custom logic inside another function, async operations

---

### Comparison Table

| Feature | Declaration | Expression | Arrow |
|---------|------------|-----------|--------|
| **Hoisting** | ✅ Yes | ❌ No | ❌ No |
| **`this` binding** | ✅ Own | ✅ Own | ❌ Lexical (parent scope) |
| **Syntax length** | Long | Medium | Short |
| **Constructor** | ✅ Yes | ✅ Yes | ❌ No |
| **Best for** | Traditional code | Variables | Short/Array methods |

---

### Key Takeaways - Day 2
1. Use **arrow functions** for short, simple operations
2. Use **function declarations** when you need hoisting
3. Use **function expressions** when storing in variables
4. **Default parameters** make functions safer and more flexible
5. **Callbacks** are everywhere in JavaScript - master them!

---

### Important Discovery - Nested Loops & Scope

Found a real bug: Using `var` with same variable name in nested loops causes the inner loop to overwrite the outer loop's variable!

**Problem:**
for (var item of wizards) {
console.log(1, item); // Prints wizard
for (var item of items) {
// Inner loop overwrites outer 'item'!
}
console.log(2, item); // Prints last item, NOT wizard!
}

**Solution:** Use `let` - each loop gets its own scope!
for (let item of wizards) {
console.log(1, item); // Prints wizard
for (let item of items) {
// Separate 'item' variable!
}
console.log(2, item); // Prints wizard correctly!
}


This is WHY modern JavaScript uses `let` instead of `var`!

---

## Practice Files Created

### Day 1
- `exercises/day1-variables.js` - Variable practice (var, let, const, scope)
- `exercises/day1-type-coercion.js` - Type coercion problems (5 solved)

### Day 2
- `exercises/day2-functions.js` - Function types practice (6 variations)

---

## Questions/Confusions

### Day 1
- ✅ RESOLVED: Understood variable shadowing in nested loops
- ✅ RESOLVED: Grasped why let/const are better than var

### Day 2
- ⚠️ Need more practice with `this` keyword in arrow vs regular functions
- ⚠️ Want to explore higher-order functions and closures
- ⚠️ Curious about async functions and promises

---

## Next Steps

### Day 3 (Monday, Oct 20)
- **Topic:** Objects
- Create objects with properties and methods
- Object destructuring
- Understanding `this` in object methods
- 5 object manipulation problems

### Week 1 Project (Day 7)
- Build Task Manager CLI
- Use all Week 1 concepts: variables, functions, objects, arrays, loops
- Push final project to GitHub

---

**Total Progress:**
- Days: 2/7 completed
- Hours: 4.5
- Concepts mastered: 10+
- Practice files: 3
- Bugs discovered and fixed: 1 (var shadowing)
