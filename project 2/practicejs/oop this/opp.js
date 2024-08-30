// const user = {
// userName:"saad",
// loginCount:8,
// signedIn:true,

// getUserDetails: function(){
// // console.log(`username: ${this.userName}`)
// console.log(this);

// }
// }
// console.log(user);
// console.log(user.userName);
// console.log(user.getUserDetails());

// 
function User(username,loginCount,isLoggedIn){
    this.userName=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this
}
const userOne = new User("saadurfsadi", 12 , false)
const userTwo = new User("chai or code", 11, true)
console.log(userOne);
console.log(userTwo);

function SetUsername(username){
  return  this.userName=username
}
function createUser(username, email, password){
SetUsername.call(this,username)
this.email=email;
this.password = password;

}
const chai = new createUser("saad","saadurfsadi10gmsail.com","123")
console.log(chai);
