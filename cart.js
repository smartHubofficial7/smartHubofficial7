let cart = JSON.parse(localStorage.getItem("cart")) || [];

let items = document.getElementById("cart-items");

let total = 0;

cart.forEach(p=>{

items.innerHTML+=`

<div>

<h3>${p.name}</h3>

<p>₹${p.price}</p>

</div>

`;

total += p.price;

});

document.getElementById("total").innerText = "Total: ₹"+total;
