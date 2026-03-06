let cart = []
let total = 0

function addCart(name,price){

cart.push({name,price})
total += price

updateCart()

}

function updateCart(){

let list = document.getElementById("cartItems")
list.innerHTML=""

cart.forEach(item =>{

let li = document.createElement("li")

li.innerText = item.name + " - ₹" + item.price

list.appendChild(li)

})

document.getElementById("total").innerText="Total ₹"+total

}

function openCart(){

document.getElementById("cart").classList.add("active")

}

function closeCart(){

document.getElementById("cart").classList.remove("active")

}

document.getElementById("search").addEventListener("keyup",function(){

let value = this.value.toLowerCase()

document.querySelectorAll(".product").forEach(p=>{

let name = p.querySelector("h3").innerText.toLowerCase()

if(name.includes(value)){

p.style.display="block"

}else{

p.style.display="none"

}

})

})
