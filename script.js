let cart = 0;

function addCart(){

cart++;

document.getElementById("cartCount").innerText = cart;

let toast = document.getElementById("toast");

toast.style.display="block";

setTimeout(()=>{

toast.style.display="none";

},2000)

}

function openLogin(){

alert("Login System Coming Soon")

}

function openCart(){

alert("Cart Items: "+cart)

}
