/*
prefer not to use var because
of issue in block scope and functional scope
*/
const accountId=144553
let accountEmail="hitesh@google.com"
var accountPassword ="12345"
accountCity="jaipur"
let accountState;

// accountId=2 //not allowed

accountEmail="hc@hc.com"
accountPassword="123321"
accountCity="bengaluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])