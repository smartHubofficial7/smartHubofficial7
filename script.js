
let cart=[]

function addCart(item){

cart.push(item)

document.getElementById("cartCount").innerText=cart.length

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

function buy(){

document.getElementById("paymentBox").style.display="block"

}

function closePay(){

document.getElementById("paymentBox").style.display="none"

}

function openLogin(){

document.getElementById("loginBox").style.display="block"

}

function closeLogin(){

document.getElementById("loginBox").style.display="none"

}
