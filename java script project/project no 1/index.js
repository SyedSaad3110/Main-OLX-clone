const formOpenBtn = document.querySelector("#form-open"),
 home = document.querySelector(".home"),
 formContainer = document.querySelector(".form-container"),
formCloseBtn = document.querySelector(".form-close"),
 signUpBtn = document.querySelector("#signup"),
 loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelector(".fa-eye-slash");

formOpenBtn.addEventListener("click",()=>{
    home.classList.add("show")})
    
formCloseBtn.addEventListener("click",()=>{
    home.classList.remove("show")
});
  
signUpBtn.addEventListener("click",()=>{
    // e.preventDefault();
    formContainer.classList.add("active")
})

loginBtn.addEventListener("click",()=>{
    // e.preventDefault();
    formContainer.classList.remove("active")
})

// pwShowHide.forEach(icon=>{
//     let getPwInput = icon.parentElement.querySelector("input")
//     console.log(getPwInput)
// })
// pwShowHide.forEach((icon)=>{
//     icon.addEventListener("click",()=>{
//         let getPwInput = icon.parentElement.querySelector("input");
//          if(getPwInput.type ==="password"){
//             getPwInput.type="text";
//             icon.classList.replace("fa-eye-slash","fa-eye")
//          }
//     })
// })