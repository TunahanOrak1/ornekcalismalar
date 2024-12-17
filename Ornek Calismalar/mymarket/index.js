// script.js
let cart = [];

function addToCart(productName, productPrice) {
    // Sepete ürün ekle
    cart.push({ name: productName, price: productPrice });
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Sepetinizde ürün yok.</p>';
    } else {
        let total = 0;
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.name} - ${item.price} TL`;
            cartDiv.appendChild(itemDiv);
            total += item.price;
        });
        const totalDiv = document.createElement('div');
        totalDiv.textContent = `Toplam: ${total} TL`;
        cartDiv.appendChild(totalDiv);
    }
}
