const accountId = 144556;
let accountemail = "riya@google.com";
var accountPassword = "2121212";
accountCity = "Jaypur";
let accountstate;

// console.log(accountId);
// console.log(accountCity);
// console.log(accountemail);

// accountId = 2  // not allowed

accountemail = "hc@ch.com"
accountPassword = "123456"
accountCity = "Surat"

/* prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountemail, accountPassword, accountCity,accountstate]);
