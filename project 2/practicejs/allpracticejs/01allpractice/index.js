// let number= 4;
// console.log(number);
// // 
// let valueInNumber = 7;
// console.log(typeof valueInNumber)
// console.log(valueInNumber)
// // 
// let score =null;
// console.log(score)
// // 
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null <= 0);

// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);
// // 
// let heros =["saad","iqra","talha"];
// let dcHeros = ["ammar","hussain","amii"];
// // let res = heros.concat(dcHeros);
// // console.log(res)
// // or is trah bhi kr skty hnn..
// const allHeros=[...heros,...dcHeros]
// console.log((allHeros));
// // 
// const anotherArray=[1,2,3,4,[468,96,47],890,[898,[896,865]]]
// let result=anotherArray.flat(Infinity)
// console.log(result)
// // 
// console.log(Array.isArray("saad"));
// console.log(Array.from("saad"));
// // 
// let score1=100;
// let score2=200;
// let score3=300;
// console.log(Array.of(score1,score2,score3))
// // 
// const mySym=Symbol("key1")

// const jsUser={
//     name:"saad",
//     [mySym]:"mykey1",
//     age:14,
//     email:"saadurfsadi",
//     isLoggedIn:false,
//     lastLoginDays:["mondayt","tuesday"]
// }
// console.log(jsUser.email);
// // rem
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);
// jsUser.email="syedbukhari"
// console.log(jsUser.email);
// Object.freeze(jsUser)
// jsUser.email="saad k bacha"
// console.log(jsUser.email);

// // 
// // error ata ha

// // JsUser.greeting = function(){
// //     console.log("hello js user");
    
// // }
// // JsUser.greetingTwo = function(){
// //     console.log(`hello js user ${this.name}`);
// // }
// // console.log(jsUser.greeting());
// // console.log(jsUser.greetingTwo);

// const tinderUser={}
// tinderUser.id="saad";
// tinderUser.name="123";
// tinderUser.isLoggedIn=true;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// // 
// const obj={
//     1:"a",
//     2:"b"
// }
// const obj2={
//     3:"c",
//     4:"d"
// }
// // let obj3=Object.assign(obj,obj2)
// // or
// let obj3=Object.assign({},obj,obj2)
// console.log(obj3);

// // 
// function sayMyName(){
//     console.log("s");
//     console.log("a");
//     console.log("a");
//     console.log("d");
// }
// sayMyName()
// //
// function addTwoNum(num1,num2) {
//     return num1 + num2
// }
// const res=addTwoNum(55,5)
// console.log(res);
// // 
// function loginUserMsg(username){
//     return `${username} just login`
// }
// console.log(loginUserMsg("saadurfsadi"))
// console.log(loginUserMsg());
// 
// function loginUserMessage(username){
// if(username === undefined){
//     console.log("plz enter a username");
//     return
// }
// return `${username} has logged`
// }
// console.log(loginUserMessage())
// // 
// function calculatePrice(...num1){
//     return num1
// };
// console.log(calculatePrice(200,300,500));
// // 
// const user = {
//     username:"saad",
//     price:200
// }
// function handleObj(anyObj){
// console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);

// }
// handleObj(user);

// const myNewArr = [200,300,400]
// function returnSecondValue(getArr){
//     return getArr[1]
// }
// const result = returnSecondValue(myNewArr);
// console.log(result);

// // 
// function one(){
//     const username = "saadsadiurf";

//    function two(){
//        const website = "youtube";
//     //    console.log(username);
//   console.log(`${username} has logged in ${website}`);
//    }
//    two()
// }
// one()

// // 
// if(true){
//     const username = "iqra pgll ha"         console.log(username + website);
        
//     }
// }
// 
// const userha={
// username :"urfsadi",
// price:999,
// welcomeMsg: function(){
//     console.log(`${this.username} , welcome to website`);
// }
// }
// userha.welcomeMsg();
// userha.username = "sam"
// userha.welcomeMsg()
// console.log(this);

// // 
// const addTwo = (num1,num2)=>{
//     return num1 +num2
// }
// console.log(addTwo(5,9));

// const temperature = 45;
// if (temperature <=40 ) {
//     console.log("temperature is greater than 50");
    
// } else {
//     console.log("tem is lress thanm 45");
// }
// 
// let balance = 700;
// if (balance < 500) {
//     console.log("less than 500");
// }else if(balance <= 700){
//     console.log("balance is less then 750");
// }else if(balance < 9000){
//     console.log("balance is less than 9000");
// }else{
//     console.log("balance is undefind");
    
// }
//     if(username === "iqra pgll ha"){
//         const website = "youtube"
//
// //
// const userLoggedIn=true;
// const debitCard=true;
// if(userLoggedIn && debitCard){
// console.log("allow to buy course");
// }
// // 
// const userLogged=false;
// const debitCardIn=false;
// if(userLoggedIn || debitCard){
// console.log("allow to buy book");
// }

// // 
// const month = 3;
// switch (month) {
//     case 1:
//         console.log("jan");
//         break;
// case 2:
//     console.log("feb");
//     break

//     case 3:
//     console.log("march");
//     break

//     default:
//         console.log("default case match");
        
//         break;
// }

// 
// const icePrice = 100;
// icePrice >=80? console.log("less than 80"): console.log("more then 80");

// // 
// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if ( element === 5) {
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }
// // 
// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <=10; j++) {

        // console.log(`inner loop has value ${j} and outer loop ${i}`);


//         console.log(i + '*' + j +'=' + i*j);
//     }
// }
// // 
//  let array = ["flash", "batman","superman"];
//  for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
//  }

//  

// for (let i = 0; i <=20; i++) {
//     if (i==5) {
//         console.log("detected 5");
//         break
//         // continue
//     }
//     console.log(` value of i is ${i}`);
// }

// // 

// let i = 0;
// while (i <=10) {
//     console.log(` value of  ${i}`);
//     i = i+2
// }

// // 
// let myArr=["saad", "iqra","hussain"]
// let arr = 0;
// while (arr < myArr.length) {
//     console.log(`val is ${myArr[arr]}`);
//     arr=arr+1
// }
// // 
// const arry=[1,2,3,4,5];
// for(const num of arry){
//     console.log(num)
// }
// // 
// const greeting = "hello words";
// for(let greet of greeting){
//     console.log(`each char is ${greet}`);
// }


// // 
// const coding = ["js","c++","rubby","python","cpp"];
// const value = coding.forEach((item)=>{
//     // console.log(item);
//     return item
// });
// console.log(value);
// // 
// const myNums = [2,4,6,8,10,12,14,16,18,20];
// const newNums = myNums.filter((item)=>{
//     return item > 8
// });
// console.log(newNums);

// // 

// const myNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// const newNumbers = myNumbers
//   .map((num)=>{
//   return  num * 10
// }).map((num)=>{
//    return num + 1
// }).filter((num)=>{
//    return num >=20
// });
// console.log(newNumbers);
// 

const myVal = [1,2,3,4,5];
const myTotal = myVal.reduce((acc, currval)=>{
    return acc + currval
});
console.log(myTotal);












