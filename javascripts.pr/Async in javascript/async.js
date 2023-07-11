// //Async Javascript 
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// setTimeout(()=>{
//   console.log("Call back function after 3 sec") // call back func
// },3000)
// console.log(5)

// Making HTTP REquest using async javascript
// let request=new XMLHttpRequest()
// console.log(request)
// // open request
// request.open("Get","https://jsonplaceholder.typicode.com/todos")
// //send request 
// request.send()

// request.addEventListener("readystatechange",()=>{
//     // console.log(request,request.readyState);
//     if(request.readyState===4)
//     {
//         console.log(request.responseText)
//     }
// })

// now we put All request in a function
// let todoRequest=(callback)=>{ 
//   //call back function
  
//   let request=new XMLHttpRequest()
// console.log(request)
// // open request
// request.addEventListener("readystatechange",()=>{
//     // console.log(request,request.readyState);
//     if(request.readyState===4 &&request.status==200)
//     {
//       let data=JSON.parse(request.responseText)
//         // console.log(request.responseText)
//         // callback(undefined,request.responseText) // data come from object formats
//         callback(undefined,data)

//     }
//     else if (request.readyState===4){
//     //  console.log("Data could not fetch");
//     callback("data could not fetch",undefined)
//     }

// })
// //Setup the request
// // request.open("Get","https://jsonplaceholder.typicode.com/todos")
// request.open("Get","data.json")
// //Send request to server
// request.send()
// }
// todoRequest((error,Data)=>{
//   // console.log("Call back function is fired");
//   if (error){
//     console.log(error);
//   }
//   else{
//     console.log(Data);
//   }
// })
//   console.log(todoRequest()) // we can agin and again function call 
//   console.log(2);
//   console.log(3);


  // Lets learn Promise(to fectch data by call back)
  // let getSomething=()=>{
  //   return new Promise((resolve, reject) => {
  //     resolve("Data s now getting correct")
  //     reject("Data is not meet")
  //   })
  // }
  // // getsomething  Method call  and then and catch use by resolve and reject
  // getSomething.then((data)=>{
  //  console.log(data);
  // }).catch((error)=>{
  //   console.log(error);
  // })

  //fetch API work

  // fetch("data.json").then((response)=>{
  //   console.log("Promise resolved",response);
  //   return response.json()
  // }).then((data)=>{
  //  console.log("If there is no error please print data",data);
  // }).catch((error)=>{
  //   console.log("there is an error in json file tnx",error);
  // })

  // Async await ...
  // let getTodo=async()=>{
  //   let response=await fetch("data.json")
  //   let data=await response.json()
  //   return data
  // } 
  // getTodo().then((data)=>{
  //   console.log(data);
  // }).catch((error)=>{
  //   console.log(error);
  // })