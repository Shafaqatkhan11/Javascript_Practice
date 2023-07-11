// let eventElement=document.querySelector(".Click")
// let ul=document.querySelector('ul')
// console.log(eventElement);
// eventElement.addEventListener("click",function(){
    // console.log(" i listen when  you Click me ");
    
//  })
// let elements=document.querySelectorAll("li")
// console.log(elements);
// elements.forEach(function(element){
//     element.addEventListener("click",function(e){
//         // console.log("when you click up on li element i listen ");
//         // console.log(e.target)
//         // e.target.style.textDecoration="line-through"
//         e.target.remove()
   
// })
// })
// const ul=document.querySelector("ul")
// ul.addEventListener("click",(e)=>{
//     // console.log("inside Ul");
//     // console.log(e)
//     if(e.target.nodeName=="LI")
//     e.target.remove()
// })

// let button=document.querySelector(".Click")
// button.addEventListener("click",()=>{
//     let li=document.createElement('li')
//     li.textContent="Something  New"// Memory create
//     console.log("inside li");
//     ul.append(li) // last added
//     // ul.prepend(li)
// })
// Event bubblings and Event deligations
// Copy event
// let copyRightElement=document.querySelector(".copy")
// copyRightElement.addEventListener("copy",()=>{
// console.log("you can not copy right");
// })
//MouseEvent
// // let box=document.querySelector(".box")
// // box.addEventListener("mousemove",(e)=>{
// //     console.log(e);
// //     // console.log(e.offsetX,e.offsetY);
// })


//  0         forms event and get value
// let form=document.querySelector(".signup_form")
// let email=document.querySelector("#email")
// let password=document.querySelector("#password")
//  // Password security  by using regular expression
//    console.log(form);
// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     console.log(e);
    // 1          Name validation
    //   let userNamePattern=/^[A-za-z]{6,13}$/ //for user  name

    // let userName=email.value  // get value from user name
    // // console.log(userName);
    // // // test method return boolean method
    // let res=userNamePattern.test(userName)
    // if(res==true){
    //     console.log("user  name is ok");
    // }
    // else{
    //     console.log("user name is not ok");
    // }
    // 2        password Validation and print
    //   let passwordPattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,10}$" //for password

    //  let result=password.value.match(passwordPattern)
    // if(result)
    // {
    //     console.log("Your Password is Strong");
    // }
    // else{
    //     console.log("Try again");
    // }
    // console.log("Submit form successfully")
    // console.log(email.value,password.value);
    // console.log(form.email.value,form.password.value); parent listener
    // accessing value by Name
    // console.log(form.userEmail.value,form.userPassword.value.length);
// })
  // Live feed back with key Events
//   let userNamePattern=/^[A-za-z]{6,13}$/ //for user  name
//   let userName=email.value  // get value from user name
//   let res=userNamePattern.test(userName)

  
//   let user=document.querySelector("#email")

//   user.addEventListener("keyup",(e)=>{
//   if(userNamePattern.test(e.target.value))
//   {
// //   console.log("Passed");
//   user.setAttribute("class",".success")
//   }
//   else{
//     // console.log("fail");
//   user.setAttribute("class",".error")

//   }
  
//   })