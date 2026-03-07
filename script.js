let cart = JSON.parse(localStorage.getItem("cart")) || [];

// page load hone par cart count show karega
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});

function addCart(productName, price) {

    let product = {
        name: productName,
        price: price
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(productName + " added to cart!");
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}
