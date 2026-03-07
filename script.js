const products=[

{name:"Smart Watch",price:1999,img:"https://via.placeholder.com/200"},
{name:"Gaming Mouse",price:799,img:"https://via.placeholder.com/200"},
{name:"Bluetooth Speaker",price:1499,img:"https://via.placeholder.com/200"},
{name:"Headphones",price:999,img:"https://via.placeholder.com/200"},
{name:"Keyboard",price:899,img:"https://via.placeholder.com/200"},
{name:"Laptop Stand",price:599,img:"https://via.placeholder.com/200"},
{name:"USB Hub",price:499,img:"https://via.placeholder.com/200"},
{name:"Phone Charger",price:299,img:"https://via.placeholder.com/200"},
{name:"Gaming Headset",price:1299,img:"https://via.placeholder.com/200"},
{name:"Smartphone",price:15999,img:"https://via.placeholder.com/200"},
{name:"Tablet",price:8999,img:"https://via.placeholder.com/200"},
{name:"Laptop",price:45999,img:"https://via.placeholder.com/200"}

]

let cart=[]

const container=document.getElementById("productContainer")

function displayProducts(list){

container.innerHTML=""

list.forEach((p,i)=>{

container.innerHTML+=`

<div class="product">

<img src="${p.img}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="addCart(${i})">Add Cart</button>

<button onclick="buyNow()">Buy</button>

</div>

`

})

}

function addCart(i){

cart.push(products[i])

document.getElementById("cartCount").innerText=cart.length

}

function buyNow(){

alert("Checkout coming soon")

}

function searchProduct(){

let value=document.getElementById("searchInput").value.toLowerCase()

let filtered=products.filter(p=>p.name.toLowerCase().includes(value))

displayProducts(filtered)

}

function toggleDark(){

document.body.classList.toggle("dark")

}

displayProducts(products)
