let login = document.querySelector(".login")
let login_link = document.querySelector(".login-linkk")
let registration_link = document.querySelector(".registration_link")


registration_link.addEventListener('click',()=>{
    login.classList.add('active');
})

login_link.addEventListener('click',()=>{
    login.classList.remove('active');
})

// login-linkk


// loginbtn initially :

let loginbtn = document.querySelector("#loginbtn");
loginbtn.addEventListener('click',()=>{
    login.classList.add('active-popup');
})

let closebtn  = document.querySelector('.closeicon');
closebtn.addEventListener('click',()=>{
    login.classList.remove('active-popup');
    // console.log("hello world!")
})

