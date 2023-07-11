 // Object Oriented Programming in javascript
 //1 constructor function and "new"operator // constructor function generally Capital letter capital
 // we can not use arrow function as a constructor
 // call "constructor" function using new "keyword"

 //1 new{object} created empty initially
 // "this"  ={object}
 //object link to proto type
 // function automatically return object.
//  let Car=function( color,model,){
//     // Car C is Capital because constructor function always Start or initialize capital
// //  console.log(this);

//  //properties
//   this.color=color;//this.y=color
//   this.model=model //this.x=model
// //   this.startEngine=function(){// not a good practice
// //     console.log("This is a start Engine function of a  Car");
// //   }

//  }
//  let instance=new Car("Black",2021)
//  // Constructor prototype
//    Car.prototype.startEngine=function(){
//     console.log("This is a prototype function property of  a Car");
//    }
//    let re=instance.startEngine()
//    console.log(re);
// //    console.log(instance.startEngine());// tell property of a constructor function in an object
// Car.prototype.company='honda'
// console.log(instance);

//  // when we use Car we use new then call constructor //E.g   new Car(); call constructor
//  let result=new Car("white",2023) //new tell Constructor call .2// we can now access this keyword properties in Constructor
// //  console.log(result,instance);// result is instance of Car ///Return  result in object
// // console.log(instance instanceof Car); //return true if yes if not return false


// // ... Some ways check prototype  (Property) instance of constructor
// console.log(Car.prototype.isPrototypeOf(result)) // return true
// console.log(Car.prototype.isPrototypeOf(instance)) // return true
// // Car.prototype is prototype "of all objects" that  are created through thr Car Constructor

// // Array Prototype
// let arr=[1,2,3,4,5,6]
// console.log(arr.__proto__);

 // Class in an object programing
 // let arr=[2,3,4,5]
// console.log(arr.__proto__)
// const message="Hello world"
// console.log(message)

//Class method declerations

// class Car {
//   constructor(model,color){
//     this.x=model
//     this.y=color
//   }
//   // function define
//   startEngine(name){
//     console.log("this is a start engine ", name)
//   }
//   }
//   let re=new Car(2023,"black")
//   console.log( re.startEngine("shani"))
//   console.log(re)

//Class methods getter and setter Methods and access as a property
// class Car{
//   constructor(color,model){
//     this.color=color
//     this.model=model
   
//   }
// get description(){
//   return(`Car model is ${this.model} and Car color is ${this.color}`)

// }
// set changeCardescription(color){
  
//   console.log(`the Car have change properties color ${color}`)
// }
//          //Static method()in class

    // Car.breakMethod=(){
    //   console.log("this  is a static method");
    // }
// }
// let instance=new Car("blue",2023)
// console.log(instance.description) // Accessing properties of a Car
// instance.changeCardescription="red"
  //Car.breakMethod()
// console.log(instance)

 //inheritance in javascript
//  / inheritance in class
//  class Car{
//    constructor(color,model){
//      this.color=color
//      this.model=model
//    }
//  }
//  let newCar=new Car("red",2024) 
//  console.log(newCar)
//  class Bike extends Car{
//     constructor(color,model,engine_No,frameName){
//      super(color,model)
//      this.engine_No=engine_No
//      this.frameName=frameName
//     }
//  }
//  let newBike=new Bike("Balck",2012,"2015lc",223521)
//  let bike2=new Bike("Brown,2020")
//  console.log(newBike,bike2)
//  console.log(newBike.__proto__)