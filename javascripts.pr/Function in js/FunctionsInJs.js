console.log("hello Functions");
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
// const shan= function(name,age,value="good"){
//     console.log("heloo world",age,name,value)
// }
// shan("Shafaqat",30);
// shan("khan",12)

// shan("Shani",10,)
//

// const ageC=function(birthYear,currentYear=2023)
// {
//     console.log("heelo its an age func")
//     let age=currentYear-birthYear
//     return age
//     console.log("hi")
// }
// console.log("My age is",ageC(1999))
//
//PAssing a function as a argument
// const uperCase=function(str){
//     return str.toUpperCase()
// }
// const lowerCase=function(str){
//     return str.toLowerCase()
// }

// const transformer=function(str,fun){
//     return fun(str)
// }
 // console.log("hi",transformer("hello men",uperCase))
// const x=6%2;
// const y=x ? "one":"two";
// console.log(y);//ans two
// // 6 divisible by 2 so reminder is zero and zero is false value in js,
// //so result is two
// let comp=function(msg){
//     return function(name){
//         console.log(`hello my ${name} and ${msg}`)
       
//     }
// }
// // 1st methoads 
// comp("you are coder")("Shani")
// // 2nd method
// let compi=comp("You are write")
// compi("Shaniii")

//
// invoked function without name
(function(name){
    console.log("helo",name)
})
("Shani")
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
// let welcome=(name, age)=>{
//     console.log(`Hello ${name} welcome in my house  ${age}`)
// }

//  let myTimeout= setTimeout(welcome,3000,"shafaqat",30)
//  let myInterval=setInterval(welcome,2000,"Shani",40)
//   clearInterval(myInterval)
//  console.log("Shafaqat")
// //clearTimeout(myTimeout)
// // Second way of time out
//  let new=setTimeOut()
//  test=5
//  console.log(test)
//  var  test
//In function hoisting
// test()
// function  test(){
//     console.log("hello world")
// }