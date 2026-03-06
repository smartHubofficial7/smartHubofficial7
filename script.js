let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function addCart(item){

cart.push(item);

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

showNotify(item+" added to cart");

}

function updateCart(){

document.getElementById("cartCount").innerText=cart.length;

let list="";

cart.forEach(item=>{

list+=`<li>${item}</li>`;

});

document.getElementById("cartItems").innerHTML=list;

}

function showNotify(text){

let n=document.getElementById("notify");

n.innerText=text;

n.style.display="block";

setTimeout(()=>{

n.style.display="none";

},2000);

}

function openCart(){

document.getElementById("cartPanel").style.right="0";

}

function buy(){

document.getElementById("paymentBox").style.display="block";

}

function closePay(){

document.getElementById("paymentBox").style.display="none";

}

function openLogin(){

document.getElementById("loginBox").style.display="block";

}

function loginUser(){

let email=document.getElementById("email").value;

localStorage.setItem("user",email);

alert("Login Successful");

document.getElementById("loginBox").style.display="none";

}
