let cart = JSON.parse(localStorage.getItem("cart")) || []

const container = document.getElementById("cart-items")

let total = 0

function displayCart(){

container.innerHTML=""

cart.forEach((item,index)=>{

total += item.price

container.innerHTML += `

<div class="product">

<img src="${item.image}">

<h3>${item.name}</h3>

<p>$${item.price}</p>

<button onclick="removeItem(${index})">Remove</button>

</div>

`

})

document.getElementById("total").innerText="Total: $"+total

}

function removeItem(i){

cart.splice(i,1)

localStorage.setItem("cart",JSON.stringify(cart))

location.reload()

}

function checkout(){

alert("Order placed successfully!")

localStorage.removeItem("cart")

location.reload()

}

displayCart()
