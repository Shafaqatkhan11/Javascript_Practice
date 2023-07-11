let letters=["a","b","c",'d','e']
// console.log(letters)
// // 1 Reverse ("its is a mutating method change origanal array") 
// let reverse=letters.reverse()
// console.log(reverse)
 //****** 2  Concat().("Non mutating") (****** */
//  let nums= [1,2,3,4,5]
//  let concated=nums.concat(letters)
//  console.log(concated)
 //****** 3 Join() .("Non mutating" Does not change orignal array) join can change data type of an array (****** */
// let joined=letters.join("-")
// console.log(joined)
 //****** 4 Slice(). ("Non mutating" extract part of array we use slice from start and end) (****** */
// let num=[1,2,3,4,5,6,7]
// let extractedArray=num.slice(1,5)
//    .//slice(startIndex,LastIndex)
// console.log(extractedArray)
// console.log('original array',num)
// console.log('extracted array',extractedArray)
 //****** 5  Splice( start index,number of remove index,add value same index were remove)(" mutating") (****** */
// let num= [1,3,4,6,7,8,9]
// //Splice(Start index,numbers of remove index value,add value same index were value remove)
// let updateArray=num.splice(1,4,7)
// console.log(updateArray)
// console.log('original array',num)
// **** 6 ) At() Method of array use in string and array to return index value
// let num=[12,3,4,5,63,3]
// console.log(num.at(-2)) // value return
// console.log(num.slice(-3))// New copy of array return
// let nam='shani'
// console.log(nam.at(-1)) //Value return only not return array
//  **** 7 ) Map()*** Higher order() Mostly used to modify array at same length some changes
// let salaries=[12,14,16,18,20]  //original array
// let increment=salaries.map(salary=>{    //apply map fun() to modify original array and  return some result a new array
//   let preincrement=salary/2
//   return salary+preincrement;
// })
// console.log( "New Salry increment by adding half salry \n",increment)
//  ***8 *** filter(filtration) Return New Array copy,no change in original array
// let number=[12,13,13,14,20,10,20]
// let filterNumber=number.filter(num=>{
//     // condition check if num match return true and result show in a new array if false no return any array
//     if(num==12||num==13||num==20)
//     {
//         return num
//     }
// })
// console.log(filterNumber);//[ 12, 13, 13, 20, 20 ] result
// console.log(number); // original array

//  ***9 *** Reduce(reduceMethod return single value ) Return total value copy,no change in original array
// let numbers=[12,10,20,8]
// let totalSum=numbers.reduce((number,currentValue)=>{  // number current value is 12,and 2nd iteration 12+13,  initial index 0 value is 12,
//     return number+currentValue

// },0)
// console.log(totalSum);
// console.log(numbers);

// //  ...*** 10 Find () Method  return only result if true other wise not return undefine ,not mutate original array


// let students=[
//     {id:1,name:"Shafaqat",rollNo:"814"},
//     {id:2,name:"Shani",rollNo:"815"},
// ]
// let student=students.find(student=>{
//     return student.id===1   //if id does not match then it false result undefine (datatype) 
// })
// console.log(student);
// console.log(students)

// //  ...*** 11 FindIndex () Method  return only result if true other wise not return undefine ,not mutate original array
// let numbers=[10,11,12,14,15]
// let result=numbers.findIndex(num=>{
//     return num>13
// })

// console.log(result);
// console.log(numbers);
   // find index upon ArrayObject
//  let students=[
//     {id:1,name:"Shafaqat",rollNo:"814"},//index==0
//     {id:2,name:"Shani",rollNo:"815"},//index==1
//     ]
//     let result=students.findIndex(student=>{
//         return student.id===4 //if id match return index if not match return always -1
//     })
//     console.log(result);


///*** 12 IndexOf() return index if true ,return -1 if false */
// let number=[10,11,13,14]
// let resultIndex=number.indexOf(11)
    
// console.log(resultIndex);
// **** lastindexOf()
//  let Number=[12,13,14,14,20]
//  console.log(Number.length-1);
//  console.log((Number[4]));
  

//  13 Some and Every () Method in an array***
// let numbers=[10,20,30,40,50];
// let result=numbers.some(num=>{  // it return true if only one element meet  condition ,(||or logic use)
//     return num>20;

// })
// console.log(result);
//   let scores=[100,200,300,400]
//   let results=scores.every(res=>{  // follow  And condition if one value false show result false
//     return res>200;
//   })
//   console.log(results);
  
//******flat()  non mutating  method ,only make copy of array of nested array */
// let array=[10,20,[30,40,[50,60,70]]]
// console.log("before flat",array);
// let result=array.flat(3)
// console.log("After flat array",result);

 // ******flatMap() return  non mutating array
// let cart=[
//     {name:"Mobile Phone",qty:2,price:4000},
//     {name:"Tablet",qty:4,price:8000},

// ]
// let newCart=cart.flatMap(item=>{
//     if(item.name==="Mobile Phone") 
//     // if condition match  return new result other wise old array..
//     return [item,{name:"Screen Protector",qty:1,Price:"free"}
// ]
// else{
//     return[item]
// }
// })
// console.log(newCart);
// console.log(cart);

//   *** 17 sorting( may  be some algorithms)***
// let numbers=[10,2,4,5,-1,4,-7,40]
// console.log(numbers); // unexpected result
// let result=numbers.sort((a,b)=>{
//     if(a<b){return -1} //any num less then 0. here a=-1,b=0
//     if(a>b){return 1} //any num less then 1 here a=0,b=-1


// })
// console.log("sorted well",result);
// Descending order Sorting   // by default ascending order sorting
// let num=numbers.sort((a,b)=>{
//     // return a-b  // ascending  order
//     // return b-a //descending order 
// })
// console.log(num);