let cart=[]

let userLogged=false

function addCart(item){

cart.push(item)

document.getElementById("cartItems").innerHTML+=`<li>${item}</li>`

showNotify(item+" added to cart")

}

function showNotify(text){

let n=document.getElementById("notify")

n.innerText=text

n.style.display="block"

setTimeout(()=>{

n.style.display="none"

},2000)

}

function openCart(){

document.getElementById("cartPanel").style.right="0"

}

function openLogin(){

document.getElementById("loginBox").style.display="block"

}

function login(){

let u=document.getElementById("user").value
let p=document.getElementById("pass").value

if(u && p){

userLogged=true

alert("Login Successful")

document.getElementById("loginBox").style.display="none"

}

}

function buy(){

if(!userLogged){

alert("Please Login First")

openLogin()

return

}

document.getElementById("payment").style.display="block"

}

function closePay(){

document.getElementById("payment").style.display="none"

}
