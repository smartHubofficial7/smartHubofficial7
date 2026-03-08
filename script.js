let products=[

{name:"iPhone 15",price:999,img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab"},
{name:"MacBook Pro",price:1999,img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"},
{name:"Gaming Laptop",price:1499,img:"https://images.unsplash.com/photo-1603302576837-37561b2e2302"},
{name:"Smart Watch",price:299,img:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"},
{name:"Headphones",price:199,img:"https://images.unsplash.com/photo-1580894908361-967195033215"},
{name:"Keyboard",price:129,img:"https://images.unsplash.com/photo-1595225476474-87563907a212"},
{name:"Gaming Mouse",price:79,img:"https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf"},
{name:"Tablet",price:499,img:"https://images.unsplash.com/photo-1587614382346-ac9b2e5e3c40"}

]

let cart=[]
let orders=[]

function showPage(page){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"))

document.getElementById(page).classList.add("active")

}

function loadProducts(list=products){

let grid=document.getElementById("productGrid")

grid.innerHTML=""

list.forEach(p=>{

grid.innerHTML+=`

<div class="card">

<img src="${p.img}">

<h3>${p.name}</h3>

<div class="price">$${p.price}</div>

<button class="btn" onclick="addToCart('${p.name}',${p.price})">Add To Cart</button>

</div>

`

})

}

loadProducts()

function searchProduct(text){

let filtered=products.filter(p=>p.name.toLowerCase().includes(text.toLowerCase()))

loadProducts(filtered)

}

function addToCart(name,price){

let item=cart.find(p=>p.name===name)

if(item){

item.qty++

}else{

cart.push({name,price,qty:1})

}

updateCart()

}

function updateCart(){

let div=document.getElementById("cartItems")

div.innerHTML=""

let total=0

cart.forEach((item,i)=>{

total+=item.price*item.qty

div.innerHTML+=`

<div class="cart-item">

<div>

${item.name}

<br>

$${item.price} × ${item.qty}

</div>

<div class="cart-buttons">

<button onclick="increase(${i})">+</button>
<button onclick="decrease(${i})">-</button>
<button onclick="removeItem(${i})">Remove</button>

</div>

</div>

`

})

document.getElementById("total").innerText="Total: $"+total

}

function increase(i){

cart[i].qty++

updateCart()

}

function decrease(i){

cart[i].qty--

if(cart[i].qty<=0) cart.splice(i,1)

updateCart()

}

function removeItem(i){

cart.splice(i,1)

updateCart()

}

function goCheckout(){

if(cart.length==0){

alert("Cart Empty")

return

}

showPage("checkout")

}

function placeOrder(){

orders.push([...cart])

cart=[]

updateCart()

updateOrders()

alert("Order placed!")

showPage("orders")

}

function updateOrders(){

let div=document.getElementById("orderList")

div.innerHTML=""

orders.forEach((o,i)=>{

div.innerHTML+=`<p>Order ${i+1} - ${o.length} items</p>`

})

}
