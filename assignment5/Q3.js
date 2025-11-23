
const user = {
    name: "Aaryan",
    showName: () => {
        console.log(this.name); 
    }
};

user.showName(); // undefined due to arrow function

const fixedUser = {
    name: "Aaryan",
    showName: function() {
        console.log(this.name);
    }
};

fixedUser.showName();
