// CART DATA

let cart = JSON.parse(localStorage.getItem("cart")) || []


// UPDATE CART COUNT

function updateCartCount(){

document.getElementById("cartCount").innerText = cart.length

}


// ADD TO CART

function addToCart(name, price){

cart.push({name, price})

localStorage.setItem("cart", JSON.stringify(cart))

updateCartCount()

alert("✅ " + name + " added to cart")

}


// SEARCH PRODUCTS

const searchBox = document.querySelector(".search")

if(searchBox){

searchBox.addEventListener("keyup", function(){

let value = this.value.toLowerCase()

document.querySelectorAll(".card").forEach(card => {

card.style.display =
card.innerText.toLowerCase().includes(value) ? "" : "none"

})

})

}


// CATEGORY FILTER

function filterCategory(type){

document.querySelectorAll(".card").forEach(card => {

if(type === "all"){

card.style.display = ""

}

else{

card.style.display =
card.classList.contains(type) ? "" : "none"

}

})

}


// BUY BUTTON

function buyProduct(name){

alert("🛒 Buying: " + name)

}


// PAGE LOAD

window.onload = function(){

updateCartCount()

}
