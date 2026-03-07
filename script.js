fetch("products.json")
.then(res=>res.json())
.then(data=>{

let container=document.getElementById("products")

data.forEach(product=>{

container.innerHTML+=`

<div class="product">

<h3>${product.name}</h3>
<p>₹${product.price}</p>

<button onclick="addCart('${product.name}',${product.price})">
Add to Cart
</button>

</div>

`

})

})

function addCart(name,price){

let cart=JSON.parse(localStorage.getItem("cart"))||[]

cart.push({name,price})

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart")

}
