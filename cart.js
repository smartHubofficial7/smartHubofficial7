let cart=JSON.parse(localStorage.getItem("cart")) || [];

let cartItems=document.getElementById("cartItems");

let total=0;

cart.forEach(item=>{

let li=document.createElement("li");

li.textContent=item.name+" ₹"+item.price;

cartItems.appendChild(li);

total+=item.price;

});

document.getElementById("total").innerText="Total ₹"+total;

function checkout(){

window.location.href="checkout.html";

}

function placeOrder(){

let message="Order:%0A";

cart.forEach(item=>{

message+=item.name+" ₹"+item.price+"%0A";

});

window.open("https://wa.me/91XXXXXXXXXX?text="+message);

}
