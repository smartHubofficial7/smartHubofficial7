let cart=JSON.parse(localStorage.getItem("cart"))||[]

let container=document.getElementById("cartItems")

let total=0

cart.forEach(item=>{

container.innerHTML+=`

<p>${item.name} - ₹${item.price}</p>

`

total+=item.price

})

container.innerHTML+=`<h2>Total ₹${total}</h2>`
