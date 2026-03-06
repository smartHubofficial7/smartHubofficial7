let cart=[]

function addCart(item){

cart.push(item)

renderCart()

showNotify(item+" added to cart")

}

function renderCart(){

let box=document.getElementById("cartItems")

box.innerHTML=""

cart.forEach((item,index)=>{

box.innerHTML+=`
<div>
${item}
<button onclick="removeItem(${index})">Remove</button>
</div>
`

})

}

function removeItem(i){

cart.splice(i,1)

renderCart()

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
