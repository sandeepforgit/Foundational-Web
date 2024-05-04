// string interpolation method
// let firstName = "Sandeep";
// let lastName = "Chodapuneedi";
// let maritalStatus = "Single";
// let country = "India";
// let age = 20;
// console.log(`My name is ${firstName} ${lastName}`);
// console.log(`I'm ${maritalStatus}`);
// console.log(`I'm from ${country}`);
// console.log(`I'm ${age} years old`);

// let s = "IaM, SaN, deEp, java, script";
// // console.log(s.toUpperCase());
// // console.log(s.includes("s"));
// const arr = s.split(",");
// console.log(arr);

// let company = 'Facebook,pw skills, Microsoft,pw skills, IBM, Oracle, Amazon';
// const arr = company.split(',');
// console.log(arr.indexOf("pw skills"));
// console.log(arr.lastIndexOf("pw skills"));


// - 4 > 3
// - 4 >= 3
// - 4 < 3
// - 4 <= 3
// - 4 == 4
// - 4 === 4
// - 4 != 4
// - 4 !== 4
// - 4 != '4'
// - 4 == '4'
// - 4 === '4'


// console.log(4 > 3); // true
// console.log(4 >= 3); // true
// console.log(4 < 3); // false
// console.log(4 <= 3); // false
// console.log(4 == 4); // true
// console.log(4 === 4); // true
// console.log(4 != 4); // false
// console.log(4 !== 4); // false
// console.log(4 != '4'); // false
// console.log(4 == '4'); // true
// console.log(4 === '4'); // false


// const dat = new Date();
// console.log(dat.getFullYear());
// console.log(dat.getMonth());
// console.log(dat.getDate());
// console.log(dat.getDay());
// console.log(dat.getHours());
// console.log(dat.getMinutes());
// console.log(dat.getSeconds());
// console.log(dat.getTime());

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();

console.log(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`);
