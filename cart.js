let cart=[]

function addToCart(name,price){

let item={

name:name,
price:price

}

cart.push(item)

localStorage.setItem("cart",JSON.stringify(cart))

alert(name+" Added To Cart")

}
