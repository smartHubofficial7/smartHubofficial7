const products=[

{name:"Smart Watch",price:1999,cat:"electronics",img:"https://m.media-amazon.com/images/I/61y2VVWcGBL._SX679_.jpg"},

{name:"Gaming Mouse",price:799,cat:"gaming",img:"https://m.media-amazon.com/images/I/61LtuGzXeaL._SX679_.jpg"},

{name:"Bluetooth Speaker",price:1499,cat:"electronics",img:"https://m.media-amazon.com/images/I/71F2y3wXQFL._SX679_.jpg"},

{name:"Headphones",price:999,cat:"electronics",img:"https://m.media-amazon.com/images/I/61CGHv6kmWL._SX679_.jpg"},

{name:"Gaming Keyboard",price:1299,cat:"gaming",img:"https://m.media-amazon.com/images/I/71kr3WAj1FL._SX679_.jpg"},

{name:"USB Hub",price:499,cat:"accessories",img:"https://m.media-amazon.com/images/I/61V+F2QqkRL._SX679_.jpg"},

{name:"Laptop Stand",price:599,cat:"accessories",img:"https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg"},

{name:"Phone Charger",price:299,cat:"accessories",img:"https://m.media-amazon.com/images/I/61JvFLHZhGL._SX679_.jpg"}

]

const container=document.getElementById("products")

let cart=JSON.parse(localStorage.getItem("cart"))||[]

document.getElementById("cartCount").innerText=cart.length


function showProducts(list){

container.innerHTML=""

list.forEach((p,i)=>{

container.innerHTML+=`

<div class="product">

<img src="${p.img}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="addCart(${i})">Add Cart</button>

<button onclick="wishlist()">Wishlist</button>

</div>

`

})

}


function addCart(i){

cart.push(products[i])

localStorage.setItem("cart",JSON.stringify(cart))

document.getElementById("cartCount").innerText=cart.length

alert("Product added to cart")

}


function wishlist(){

alert("Added to wishlist")

}


function filterProducts(cat){

if(cat==="all"){

showProducts(products)

}else{

let filtered=products.filter(p=>p.cat===cat)

showProducts(filtered)

}

}


document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase()

let filtered=products.filter(p=>p.name.toLowerCase().includes(value))

showProducts(filtered)

})


document.getElementById("darkBtn").onclick=function(){

document.body.classList.toggle("dark")

}


showProducts(products)
