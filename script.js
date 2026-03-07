let products = [

{
id:1,
name:"Wireless Earbuds",
price:999,
image:"https://via.placeholder.com/200"
},

{
id:2,
name:"Smart Watch",
price:1999,
image:"https://via.placeholder.com/200"
},

{
id:3,
name:"Bluetooth Speaker",
price:1499,
image:"https://via.placeholder.com/200"
}

];

function showProducts(){

let list = document.getElementById("product-list");

list.innerHTML="";

products.forEach(p=>{

list.innerHTML+=`

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="addToCart(${p.id})">
Add To Cart
</button>

</div>

`;

});

}

showProducts();

function addToCart(id){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let product = products.find(p=>p.id==id);

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

}

function updateCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cart-count").innerText = cart.length;

}

updateCart();

function searchProduct(){

let search = document.getElementById("search").value.toLowerCase();

let filtered = products.filter(p=>p.name.toLowerCase().includes(search));

let list = document.getElementById("product-list");

list.innerHTML="";

filtered.forEach(p=>{

list.innerHTML+=`

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="addToCart(${p.id})">
Add To Cart
</button>

</div>

`;

});

}
