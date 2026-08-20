const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);// toString se string me covert ho gya ab string wali property lga skte hai jaise .length..
//console.log(balance.toFixed(2));//toFixed ka mtlb hai ki decimal k bad kitna digit tk chahiye is case me 2 hai

const otherNumber = 23.8966

//console.log(otherNumber.toPrecision(3));//specified the number of significant digit require is case me 3 hai

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));//toLocaleString convert krega us systm me then en IN isko indian system me convert krega

// ++++++++++++++++++++   MATH   ++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));


console.log(Math.random());// 0 se 1 k bich me value dega random use krne se
console.log((Math.random()*10) + 1);// 10 se multiply krne pe value 0 to 10 aayegi per 1 add krne se minimum 1 ho jayega 
console.log((Math.random()*10) + 1);

const min  = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min)