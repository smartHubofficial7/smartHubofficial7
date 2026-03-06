function openLogin(){

document.getElementById("loginBox").style.display="block"

}

function closeLogin(){

document.getElementById("loginBox").style.display="none"

}

function createAccount(){

let user=document.getElementById("user").value
let pass=document.getElementById("pass").value

if(user==""||pass==""){

alert("Fill all fields")

return

}

localStorage.setItem("user",user)
localStorage.setItem("pass",pass)

alert("Account Created!")

closeLogin()

}

function buy(){

let user=localStorage.getItem("user")

if(!user){

alert("Please create account first")

openLogin()

return

}

alert("Product Purchased!")

}

function openCart(){

alert("Cart feature coming soon")

}
