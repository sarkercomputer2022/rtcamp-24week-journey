// ============================================
// Week 1 Day 3: JavaScript Objects Practice
// Name: Subhash
// Date: October 20, 2025
// ============================================

console.log("=== JavaScript Objects Fundamentals ===\n");

// ==========================================
// 1. OBJECT CREATION - Three Ways
// ==========================================

console.log("--- 1. Object Creation ---");

// Method 1: Object Literal (Most Common)
const person = {
    firstName: "Subhash",
    lastName: "Venkata",
    age: 25,
    company: "TCS",
    role: "Windchill Developer"
};
console.log("Person:", person);

// Method 2: Using 'new Object()'
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2024;
console.log("Car:", car);

// Method 3: Using Object.create()
const employee = Object.create({});
employee.name = "Subhash";
employee.department = "Development";
console.log("Employee:", employee);

console.log("\n");

// ==========================================
// 2. ACCESSING PROPERTIES - Two Ways
// ==========================================

console.log("--- 2. Accessing Properties ---");

const user = {
    username: "subhash0910",
    email: "subhashvenkata1430@gmail.com",
    location: "Hyderabad"
};

// Dot notation (most common)
console.log("Username:", user.username);
console.log("Email:", user.email);

// Bracket notation (useful for dynamic keys)
console.log("Location:", user["location"]);

// Dynamic property access
const propertyName = "email";
console.log("Dynamic access:", user[propertyName]);

console.log("\n");

// ==========================================
// 3. ADDING & MODIFYING PROPERTIES
// ==========================================

console.log("--- 3. Adding & Modifying Properties ---");

const developer = {
    name: "Subhash",
    language: "Java"
};

console.log("Before:", developer);

// Adding new property
developer.framework = "React";
developer["database"] = "PostgreSQL";

// Modifying existing property
developer.language = "JavaScript";

console.log("After:", developer);

console.log("\n");

// ==========================================
// 4. DELETING PROPERTIES
// ==========================================

console.log("--- 4. Deleting Properties ---");

const product = {
    name: "Laptop",
    price: 1000,
    discount: 100,
    tax: 50
};

console.log("Before delete:", product);

// Delete a property
delete product.discount;

console.log("After delete:", product);

console.log("\n");

// ==========================================
// 5. OBJECT METHODS (Functions in Objects)
// ==========================================

console.log("--- 5. Object Methods ---");

const calculator = {
    num1: 10,
    num2: 5,
    
    // Method 1: Function syntax
    add: function() {
        return this.num1 + this.num2;
    },
    
    // Method 2: ES6 shorthand (MODERN!)
    subtract() {
        return this.num1 - this.num2;
    },
    
    multiply() {
        return this.num1 * this.num2;
    },
    
    // Arrow function (WARNING: 'this' behaves differently!)
    divide: () => {
        // 'this' doesn't work as expected in arrow functions!
        console.log("Note: Arrow functions don't have their own 'this'");
        return 10 / 5; // Hardcoded for demo
    }
};

console.log("Add:", calculator.add());
console.log("Subtract:", calculator.subtract());
console.log("Multiply:", calculator.multiply());
console.log("Divide:", calculator.divide());

console.log("\n");

// ==========================================
// 6. THE 'this' KEYWORD
// ==========================================

console.log("--- 6. Understanding 'this' ---");

const student = {
    name: "Subhash",
    course: "JavaScript",
    study: function() {
        // 'this' refers to the student object
        console.log(`${this.name} is studying ${this.course}`);
    },
    
    // Arrow function - 'this' doesn't work!
    wrongStudy: () => {
        // 'this' doesn't refer to student object
        console.log("Arrow function - 'this' is undefined or global");
    }
};

student.study();       // Works correctly
student.wrongStudy();  // Won't work as expected

console.log("\n");

// ==========================================
// 7. NESTED OBJECTS
// ==========================================

console.log("--- 7. Nested Objects ---");

const company = {
    name: "TCS",
    location: "Hyderabad",
    employee: {
        name: "Subhash",
        role: "Developer",
        skills: {
            primary: "Windchill",
            learning: "JavaScript"
        }
    }
};

console.log("Company:", company.name);
console.log("Employee:", company.employee.name);
console.log("Primary skill:", company.employee.skills.primary);
console.log("Learning:", company.employee.skills.learning);

console.log("\n");

// ==========================================
// 8. OBJECT DESTRUCTURING (ES6+)
// ==========================================

console.log("--- 8. Object Destructuring ---");

const profile = {
    username: "subhash0910",
    email: "subhash@example.com",
    age: 25,
    city: "Hyderabad"
};

// Old way - accessing properties one by one
// const username = profile.username;
// const email = profile.email;

// Modern way - destructuring (extracts multiple properties at once)
const { username, email, age, city } = profile;

console.log("Username:", username);
console.log("Email:", email);
console.log("Age:", age);
console.log("City:", city);

// Destructuring with rename
const { username: userId, email: userEmail } = profile;
console.log("Renamed - userId:", userId);
console.log("Renamed - userEmail:", userEmail);

// Destructuring with default values
const { country = "India" } = profile;
console.log("Country (default):", country);

console.log("\n");

// ==========================================
// 9. OBJECT METHODS - Useful Built-in Methods
// ==========================================

console.log("--- 9. Built-in Object Methods ---");

const tech = {
    frontend: "React",
    backend: "Node.js",
    database: "PostgreSQL"
};

// Get all keys
const keys = Object.keys(tech);
console.log("Keys:", keys);

// Get all values
const values = Object.values(tech);
console.log("Values:", values);

// Get all key-value pairs
const entries = Object.entries(tech);
console.log("Entries:", entries);

// Check if property exists
console.log("Has 'frontend'?", tech.hasOwnProperty('frontend'));
console.log("Has 'mobile'?", tech.hasOwnProperty('mobile'));

console.log("\n");

// ==========================================
// 10. PRACTICAL EXAMPLE - User Profile
// ==========================================

console.log("--- 10. Real-World Example ---");

const userProfile = {
    // Properties
    id: 101,
    name: "Subhash Venkata",
    email: "subhashvenkata1430@gmail.com",
    role: "Developer",
    company: "TCS",
    joinDate: "Feb 2025",
    
    // Methods
    getFullInfo() {
        return `${this.name} works as ${this.role} at ${this.company}`;
    },
    
    updateRole(newRole) {
        this.role = newRole;
        console.log(`Role updated to: ${this.role}`);
    },
    
    getExperience() {
        const joinMonth = 2; // February
        const currentMonth = 10; // October
        return currentMonth - joinMonth;
    }
};

console.log(userProfile.getFullInfo());
console.log("Experience:", userProfile.getExperience(), "months");
userProfile.updateRole("Full Stack Developer");
console.log(userProfile.getFullInfo());

console.log("\n=== Day 3 Objects Practice Complete! ===");
