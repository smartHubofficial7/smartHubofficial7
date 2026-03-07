let cartCount = 0;

function addCart() {
    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    alert("Product added to cart!");
}
