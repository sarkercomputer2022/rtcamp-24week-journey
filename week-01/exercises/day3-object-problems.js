// ============================================
// Week 1 Day 3: Object Manipulation Problems
// ============================================

console.log("=== Object Problems - Practice ===\n");

// ==========================================
// PROBLEM 1: Create a Book Object
// ==========================================

console.log("--- Problem 1: Book Object ---");


const book ={
    title: "JavaScript Mastery",
    author: "Subhash",
    year: 2025,
    pages: 500,
    getInfo(){
        return `JavaScript Mastery by ${this.author} (${this.year})`;
}

};
console.log(book.getInfo());
console.log("Pages:", book.pages);

console.log("\n");


console.log("--- Problem 2: Modify Object ---");

// Given this object:
const smartphone = {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 80000
};

smartphone.color = "Black";
smartphone.price=75000;
delete smartphone.model;

console.log(smartphone);

console.log("\n");

// ==========================================
// PROBLEM 3: Object with Methods
// ==========================================

console.log("--- Problem 3: Bank Account ---");

const bankAccount = {
    accountNumber: "ACC123456",
    balance: 10000,
    
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    },
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
        }
    },
    
    getBalance() {
        return this.balance;
    }
};

// Test it:
console.log("Initial balance:", bankAccount.getBalance());
bankAccount.deposit(5000);
bankAccount.withdraw(3000);
bankAccount.withdraw(20000); // Should fail
console.log("Final balance:", bankAccount.getBalance());

console.log("\n");

const rtCampApplication = {
    applicant: {
        name: "Subhash",
        email: "subhash@example.com",
        experience: {
            years: 0.8,
            company: "TCS",
            skills: ["Java", "JavaScript", "React"]
        }
    },
    position: "Full Stack Developer",
    date: "Oct 2025"
};
console.log("Name:", rtCampApplication.applicant.name);
console.log("Experience:", rtCampApplication.applicant.experience.years, "years");
console.log("First skill:", rtCampApplication.applicant.experience.skills[0]);
console.log("Position:", rtCampApplication.position);

console.log("\n");
console.log("--- Problem 5: Destructuring Practice ---");

// Given this object:
const developer = {
    name: "Subhash",
    age: 25,
    company: "TCS",
    role: "Developer",
    skills: ["JavaScript", "React", "Node.js"],
    location: "Hyderabad"
};

// TODO: Use destructuring to extract:
// 1. name, age, company into separate variables
// 2. skills array
// 3. location with a default value if not present

// YOUR CODE HERE:
const { name, age, company } = developer;
const { skills } = developer;
const { location = "Unknown" } = developer;

console.log("Name:", name);
console.log("Age:", age);
console.log("Company:", company);
console.log("Skills:", skills);
console.log("Location:", location);

console.log("\n");

// ==========================================
// BONUS PROBLEM: Complete Object Challenge
// ==========================================

console.log("--- BONUS: Employee Management System ---");

// TODO: Create an 'employee' object with:
// - id, name, department, salary
// - Method getDetails() - returns formatted string
// - Method giveRaise(percentage) - increases salary by percentage
// - Method changeDepartment(newDept) - updates department

// YOUR CODE HERE:
const employee = {
    id: 1001,
    name: "Subhash Venkata",
    department: "Development",
    salary: 50000,
    
    getDetails() {
        return `Employee #${this.id}: ${this.name} - ${this.department} - ₹${this.salary}`;
    },
    
    giveRaise(percentage) {
        const increase = (this.salary * percentage) / 100;
        this.salary += increase;
        console.log(`Salary increased by ${percentage}%. New salary: ₹${this.salary}`);
    },
    
    changeDepartment(newDept) {
        this.department = newDept;
        console.log(`Department changed to: ${this.department}`);
    }
};

// Test it:
console.log(employee.getDetails());
employee.giveRaise(10);
employee.changeDepartment("Full Stack Development");
console.log(employee.getDetails());

console.log("\n=== All Problems Complete! ===");