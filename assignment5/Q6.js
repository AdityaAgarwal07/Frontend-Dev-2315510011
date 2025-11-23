
function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function() {
    console.log("Hello, I am " + this.name);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDept = function() {
    console.log("Department:", this.department);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showSubject = function() {
    console.log("Subject:", this.subject);
};

const prof = new Professor("Dr. Aaryan", "CSE", "ML");
prof.sayHello();
prof.showDept();
prof.showSubject();
