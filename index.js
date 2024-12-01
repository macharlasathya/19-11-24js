let Name1=document.getElementById("userName")
let email=document.getElementById("UserEmail")
let password=document.getElementById("pswd")
let buttton=document.getElementById("Submitbtn")

buttton.addEventListener("click" ,(e) =>
{
    e.preventDefault()
    const NameValue=Name1.value
    const emailValue=email.value
    const pswdValue=password.value
    localStorage.setItem("name",NameValue)
    localStorage.setItem("email",emailValue)
    localStorage.setItem("pw",pswdValue)
    alert("done sucessfully");

    window.location.assign("login.html");
})