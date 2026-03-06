let products=[

{
name:"Smart Watch",
price:1999,
img:"https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UF1000,1000_QL80_.jpg"
},

{
name:"Refrigerator",
price:18999,
img:"https://m.media-amazon.com/images/I/71YXzeOuslL.jpg"
},

{
name:"Ceiling Fan",
price:2499,
img:"https://m.media-amazon.com/images/I/61p0G+6YdPL.jpg"
},

{
name:"Bluetooth Earbuds",
price:1499,
img:"https://m.media-amazon.com/images/I/61SUj2aKoEL.jpg"
},

{
name:"Gaming Laptop",
price:55999,
img:"https://m.media-amazon.com/images/I/71TPda7cwUL.jpg"
},

{
name:"LED TV",
price:29999,
img:"https://m.media-amazon.com/images/I/61-r9zOKBCL.jpg"
}

]

let cart=[]

function loadProducts(){

let html=""

products.forEach((p,i)=>{

html+=`

<div class="card">

<img src="${p.img}">

<h3>${p.name}</h3>

<div class="price">₹${p.price}</div>

<button class="btn cartbtn" onclick="addCart(${i})">
Add To Cart
</button>

<button class="btn buybtn" onclick="buyNow()">
Buy Now
</button>

</div>

`

})

document.getElementById("products").innerHTML=html

}

loadProducts()


function addCart(i){

cart.push(products[i])

document.getElementById("cartCount").innerText=cart.length

document.getElementById("cartItems").innerHTML+=`<li>${products[i].name}</li>`

notify(products[i].name+" added to cart")

}


function openCart(){

document.getElementById("cartPanel").style.right="0"

}


function buyNow(){

checkLogin()

document.getElementById("paymentBox").style.display="block"

}


function buyCart(){

checkLogin()

document.getElementById("paymentBox").style.display="block"

}


function closePayment(){

document.getElementById("paymentBox").style.display="none"

}


function notify(text){

let n=document.getElementById("notify")

n.innerText=text

n.style.display="block"

setTimeout(()=>{

n.style.display="none"

},2000)

}


function openLogin(){

document.getElementById("loginBox").style.display="block"

}


function createAccount(){

let email=document.getElementById("email").value

let pass=document.getElementById("password").value

localStorage.setItem("user",email)

alert("Account Created")

document.getElementById("loginBox").style.display="none"

}


function checkLogin(){

let u=localStorage.getItem("user")

if(!u){

alert("Please login first")

openLogin()

}

}
