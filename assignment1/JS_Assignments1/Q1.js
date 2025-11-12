// Q1. Personalized Login Greeting
// This program greets users based on the current time.

let userName = "Aaryan";
let currentHour = new Date().getHours();

if (currentHour < 12) {
  console.log(`Good Morning ${userName}!`);
} else if (currentHour < 17) {
  console.log(`Good Afternoon ${userName}!`);
} else {
  console.log(`Good Evening ${userName}!`);
}
