// console.log("hello world");
// let arr=[1,2,3,4,5,6,7]
// let result=arr.forEach((ele)=> console.log(ele))
// console.log(result);
// 2nd trick that is use in real time projects
 // how to get more info about arr,index item fuul array

// let arr=[1,2,3,4,5,6,7]

//  let myfunc=(item,index,arr)=>{
//     console.log(`item is : ${item} and index is : ${index} and  full ara is :${arr}`);
//  }
//  // now we pass function by refernce 
//  arr.forEach(myfunc)
// // for each func in not returen any value
// const myCodingLanguage=[
//     {
//     filename:"javascript",file:"js",
//     //  myfunc:()=>{console.log(`My language name is ${this.filename}`)},
//      },
// ]
// // print complex data in an object
//  let ans=myCodingLanguage.forEach((item)=>{
//     console.log(`my coding loving language is ${item.filename} and my function in an objct ${item.myfunc}`);
// })
// console.log(ans);
// $$$$$$ 2nd Method is  filter  it always return a value
//  let Arr=[1,2,3,4,5,6,7]
 // filter method applay
//  let num=4
//  let ans=Arr.filter((item)=>{
//     if(item>=num)
//     {
//         return item,
//     }
    
//  })
//  console.log(ans)
// let same result display from for each loop
// let newnum=[]
//  let res=Arr.forEach((num)=>{
//     if(num<=4){
//         newnum.push(num)
//     }
// })
// console.log(newnum);

// objects 
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];
//    // let best practice on objects
//     let ans=books.filter((item)=>{
//         item.publish===2009
//        return item
//     })
// //     console.log(ans);
//   let arr=[1,2,3,4,5]
//   let ans=arr.map((item)=>{
//     return item+2
//   }).filter((it)=>{
//     return it>=5
//   })
// console.log(ans);
// let card=[
//     {name:"jsCourse",price:2999},
//     {name:"jyCourse",price:1999},
//     {name:"c++",price:2999},
//     {name:"javaCourse",price:2999},
    

// ]
// // so we add price all courses that us buy
// let result =card.reduce((acc,item)=>{
//     return (acc+item.price)
// },0)
// console.log(result);