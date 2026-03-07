const products=[

{
name:"Smart Watch",
price:1999,
img:"https://via.placeholder.com/200"
},

{
name:"Gaming Mouse",
price:799,
img:"https://via.placeholder.com/200"
},

{
name:"Bluetooth Speaker",
price:1499,
img:"https://via.placeholder.com/200"
},

{
name:"Headphones",
price:999,
img:"https://via.placeholder.com/200"
},

{
name:"Keyboard",
price:899,
img:"https://via.placeholder.com/200"
},

{
name:"Laptop Stand",
price:599,
img:"https://via.placeholder.com/200"
},

{
name:"Phone Charger",
price:299,
img:"https://via.placeholder.com/200"
},

{
name:"Gaming Headset",
price:1299,
img:"https://via.placeholder.com/200"
},

{
name:"USB Hub",
price:499,
img:"https://via.placeholder.com/200"
},

{
name:"Smartphone",
price:15999,
img:"https://via.placeholder.com/200"
},

{
name:"Tablet",
price:18999,
img:"https://via.placeholder.com/200"
},

{
name:"Monitor",
price:9999,
img:"https://via.placeholder.com/200"
}

]


let cart=[]

function showProducts(list){

const container=document.getElementById("products")

container.innerHTML=""

list.forEach((p,i)=>{

container.innerHTML+=`

<div class="card">

<img src="${p.img}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="addCart(${i})">Add To Cart</button>

<button onclick="buyNow('${p.name}')">Buy</button>

</div>

`

})

}


function addCart(i){

cart.push(products[i])

document.getElementById("cartCount").innerText=cart.length

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart")

}


function buyNow(name){

alert("Buying "+name)

}


document.getElementById("search").addEventListener("keyup",function(){

let text=this.value.toLowerCase()

let filtered=products.filter(p=>p.name.toLowerCase().includes(text))

showProducts(filtered)

})


showProducts(products)
