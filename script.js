const products = [

{
name:"Gaming Laptop",
price:1200,
image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
},

{
name:"Smart Phone",
price:700,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
},

{
name:"Smart Watch",
price:150,
image:"https://images.unsplash.com/photo-1518443895914-3c5f4eaa3c5d"
},

{
name:"Headphones",
price:80,
image:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
}

]

let cart = JSON.parse(localStorage.getItem("cart")) || []
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []


function displayProducts(list){

const container=document.getElementById("product-list")

container.innerHTML=""

list.forEach((p,i)=>{

container.innerHTML+=`

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>$${p.price}</p>

<button onclick="addCart(${i})">Add to Cart</button>

<button onclick="addWishlist(${i})">❤️</button>

</div>

`

})

}

function addCart(i){

cart.push(products[i])

localStorage.setItem("cart",JSON.stringify(cart))

updateCart()

alert("Added to cart")

}

function addWishlist(i){

wishlist.push(products[i])

localStorage.setItem("wishlist",JSON.stringify(wishlist))

alert("Added to wishlist ❤️")

}

function updateCart(){

document.getElementById("cart-count").innerText=cart.length

}

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase()

let filtered=products.filter(p=>p.name.toLowerCase().includes(value))

displayProducts(filtered)

})

function toggleDark(){

document.body.classList.toggle("dark")

}

function toggleMenu(){

document.getElementById("menu").classList.toggle("active")

}

displayProducts(products)

updateCart()
