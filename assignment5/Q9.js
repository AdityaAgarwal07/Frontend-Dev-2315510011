
class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    showBranch() {
        console.log("Branch:", this.branch);
    }
}

const s2 = new Student("Aaryan", "AIML");
s2.showName();
s2.showBranch();
