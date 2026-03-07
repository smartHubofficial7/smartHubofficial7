
let cart = 0

function addToCart(){

cart++

document.getElementById("cartCount").innerText = cart

alert("Product Added to Cart")

}

function searchProduct(){

let input = document.getElementById("searchInput").value.toLowerCase()

let products = document.querySelectorAll(".product")

products.forEach(product=>{

let name = product.innerText.toLowerCase()

if(name.includes(input)){

product.style.display="block"

}else{

product.style.display="none"

}

})

}

function openLogin(){

document.getElementById("loginPopup").style.display="flex"

}

function closeLogin(){

document.getElementById("loginPopup").style.display="none"

}

function slider(){

let hero = document.querySelector(".hero")

let images=[

"url('https://via.placeholder.com/1200x400')",
"url('https://via.placeholder.com/1200x400/111')",
"url('https://via.placeholder.com/1200x400/333')"

]

let i=0

setInterval(()=>{

hero.style.backgroundImage=images[i]

i++

if(i>=images.length){

i=0

}

},3000)

}

slider()

function wishlist(product){

alert(product+" added to wishlist")

}

function darkMode(){

document.body.classList.toggle("dark")

}
