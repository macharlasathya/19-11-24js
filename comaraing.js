let checkName=document.getElementById("Userinputname")
let CheckPswd=document.getElementById("userinputpswd")
let C=document.getElementById("Submitbtn")

C.addEventListener("click", () =>
{
    let nameStroage=localStorage.getItem("name")
    let Pswdstroage=localStorage.getItem("pw")
    let getName=  checkName.value
    let getPswd= CheckPswd.value

    if(nameStroage == getName  &&  Pswdstroage ==  getPswd)
    {
        alert("login sucessfully")
        window.location.href="home.html"
    }
    else
    {
        alert("ohoo")
}
})
