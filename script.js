
let products = [

{name:"Smart Watch",price:1999,img:"https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg"},
{name:"iPhone",price:79999,img:"https://m.media-amazon.com/images/I/61-r9zOKBCL.jpg"},
{name:"Gaming Laptop",price:55999,img:"https://m.media-amazon.com/images/I/71TPda7cwUL.jpg"},
{name:"Bluetooth Earbuds",price:1499,img:"https://m.media-amazon.com/images/I/61SUj2aKoEL.jpg"},
{name:"LED TV",price:29999,img:"https://m.media-amazon.com/images/I/71YXzeOuslL.jpg"},
{name:"Refrigerator",price:18999,img:"https://m.media-amazon.com/images/I/71YXzeOuslL.jpg"},
{name:"Ceiling Fan",price:2499,img:"https://m.media-amazon.com/images/I/61p0G+6YdPL.jpg"},
{name:"Gaming Mouse",price:999,img:"https://m.media-amazon.com/images/I/61mpMH5TzkL.jpg"},
{name:"Mechanical Keyboard",price:3499,img:"https://m.media-amazon.com/images/I/71kr3WAj1FL.jpg"},
{name:"Tablet",price:25999,img:"https://m.media-amazon.com/images/I/61NGnpjoRDL.jpg"}

];

let cart=[]
let total=0

function loadProducts(){

let container=document.getElementById("productContainer")

products.forEach((p,i)=>{

container.innerHTML+=`

<div class="card">

<img src="${p.img}">

<h3>${p.name}</h3>

<div class="price">₹${p.price}</div>

<button class="btn cartbtn" onclick="addCart(${i})">Add To Cart</button>

<button class="btn buybtn" onclick="buy()">Buy Now</button>

</div>

`

})

}

loadProducts()

function addCart(i){

cart.push(products[i])

total+=products[i].price

document.getElementById("cartItems").innerHTML+=`<li>${products[i].name} - ₹${products[i].price}</li>`

document.getElementById("total").innerText=total

showNotify(products[i].name+" added")

}

function showNotify(text){

let n=document.getElementById("notify")

n.innerText=text

n.style.display="block"

setTimeout(()=>{

n.style.display="none"

},2000)

}

function openCart(){

document.getElementById("cartPanel").style.right="0"

}

function buy(){

document.getElementById("paymentBox").style.display="block"

}

function closePay(){

document.getElementById("paymentBox").style.display="none"

}

function openLogin(){

document.getElementById("loginBox").style.display="block"

}

function closeLogin(){

document.getElementById("loginBox").style.display="none"

}

function searchProduct(){

let value=document.getElementById("search").value.toLowerCase()

let cards=document.querySelectorAll(".card")

cards.forEach(card=>{

let title=card.querySelector("h3").innerText.toLowerCase()

card.style.display=title.includes(value) ? "block":"none"

})

}
