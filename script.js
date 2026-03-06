
let userLogged = false

let cart = []

function openLogin(){

document.getElementById("loginBox").style.display="block"

}

function login(){

let u = document.getElementById("username").value
let p = document.getElementById("password").value

if(u && p){

userLogged = true
alert("Login Successful")

document.getElementById("loginBox").style.display="none"

}

}


function signup(){

alert("Account Created Successfully")
userLogged = true

document.getElementById("loginBox").style.display="none"

}


function addCart(product){

cart.push(product)

let list = document.getElementById("cartItems")

let li = document.createElement("li")

li.innerText = product

list.appendChild(li)


let note = document.getElementById("notification")

note.style.display="block"

setTimeout(()=>{

note.style.display="none"

},2000)

}


function openCart(){

document.getElementById("cart").classList.toggle("open")

}


function buy(){

if(!userLogged){

alert("Please Login First")

openLogin()

return

}

alert("Order Successful")

}


function checkout(){

if(cart.length==0){

alert("Cart empty")

}else{

alert("Order Placed Successfully")

}

}
