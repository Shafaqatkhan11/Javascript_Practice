// Destructuring in Array and objects
// Array Destructuring
// let arr=[10,20,30,40]
// let[x,y,z,p]=arr
// console.log(x,y);
// // objects Destructuring
// let hotel={
//     name:"Grand hotel",
//     location:"street 5",
//     price:60,
//     categories:["pakistani","indian","china"]

// }
// Destructuring  objects
// let [first,,third]=hotel.categories
// console.log(first,third);
// swaping results
// let temp=first
// first=third
// third=temp
// console.log(first,third);  // this is called swaping
// let {name:hotelName,location:hotelLocation}=hotel
// console.log(hotelLocation); //coustomizing objects
//
// Spread operators
// let nums=[2,3,4,5,7]
// // console.log(nums);// array type out put
// //   console.log(...nums); // only value show not array type
// // spread operator can be used combine
// let newArray=[9,10,...nums]
// console.log(newArray); // out put array format
// // spread can be used join to array
// let joinedArray=[...nums,newArray]
// console.log(joinedArray);
 // spread operator on  strings
//  let passion="programing"
//  console.log(...passion);
//  console.log(passion.slice(2,-1))

 // Rest parameter or Pattern   (opposite to spread operator)
//  let nums=[2,3,4,5,6]
//  let[a,b,...rest]=nums
//  console.log(a);
//  console.log(rest);
 //rest can b used as an objects
// let  obj={
//     name:"shani",
//     rollno:"f190814",
//     marks:[10,20,30,40,50],
//  }
//  // now using rest parameter
// let {marks:newMarks}=obj
// console.log(newMarks);

// Nullish operator only accept value not accept null or undefined
// let numGuest=null
// // let results=numGuest && 10
// let results=numGuest ||10
// console.log(results);
// let result2=numGuest ?? 10
// console.log(result2);

// for of loop //for using dynamic if we not know length
// let menu=["chicken","Rost","kb"];
// for(let elem of menu.entries()){
//     console.log(elem);
// }
