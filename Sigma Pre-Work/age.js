let year = prompt("Enter your birth year in the format YYYY:");
let month = prompt("Enter your birth month in the format MM:");
let day = prompt("Enter your birth day in the format DD:");

let today = new Date();
today = Date.parse(today);
let birthday = Date.parse(year + "-" + month + "-" + day);
let age = (today - birthday) / 31556952000;
console.log(Math.floor(age));
