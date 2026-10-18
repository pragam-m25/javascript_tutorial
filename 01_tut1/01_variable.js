const accountId = 144553
let accountEmail = "pragam@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

let accountState ;

// accountId = 2  not possible to change the constant 

accountEmail ="pp@pp"
accountPassword = "12"
accountCity = "Rajpura"

console.log(accountId);
/*
prefer not to use the var 
bcz of issue in block scope and functional scope 
*/

console.table([accountEmail,accountPassword,accountCity,accountState])
