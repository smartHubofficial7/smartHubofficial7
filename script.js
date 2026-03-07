let cartCount = 0;

// page load hone par localStorage se count le lo
document.addEventListener("DOMContentLoaded", function () {

    let savedCart = localStorage.getItem("cartCount");

    if(savedCart){
        cartCount = parseInt(savedCart);
    }

    document.getElementById("cart-count").innerText = cartCount;

});


function addCart(){

    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    localStorage.setItem("cartCount", cartCount);

}
