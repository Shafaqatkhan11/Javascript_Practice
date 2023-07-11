// ***Local Storage in javascript  we use to store and  bring data browser file
// local storage is an api provided by browser to store data inside browser
// console.log(window);
// console.log(localStorage);

//  1 ** local Storage setItem("key","value")
// localStorage.setItem("name","Shani")
// localStorage.setItem("age",20)

// console.log(localStorage);
// //  2 ** local Storage getItem("key")// only key
// console.log(localStorage.getItem("age"));
// console.log(localStorage.getItem("name"));
// //  3 **local storage update by setItem  override value
// console.log(localStorage.setItem("name","noshan"));
// console.log(localStorage.getItem("name"))
// // 4  ** RemoveItem("key") //just we need key 
// console.log(localStorage.removeItem("age"));
// console.log(localStorage.getItem("age")); // age is remove 
// // 5 ** CLear() all local storage
// console.log(localStorage.clear());

// Store Complex data structure in local storage
// let vehicles=[
//     {company:"honda",modal:2009},
//     {company:"Toyata",model:2020}
// ]
// // console.log(typeof vehicles);
// let stringOfVehicles=JSON.stringify(vehicles)
// console.log(stringOfVehicles);
// console.log(typeof stringOfVehicles);// now its convert from objects to string
// // we can set it on a local storage 
// localStorage.setItem("vehicles","stringOfVehicles")
// console.log(stringOfVehicles);
// //   Get store item in the object formate
// let storeData=localStorage.getItem("vehicle")
// console.log(storeData);
// //
// let objectFormate=JSON.parse(storeData)
// console.log((typeof objectFormate));