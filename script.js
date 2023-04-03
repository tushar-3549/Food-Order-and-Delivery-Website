const cartList = document.getElementById('cart-list');
const burgerQuantity = document.getElementById('burger-quantity');
const pizzaQuantity = document.getElementById('pizza-quantity');
const addToCartButtons = document.querySelectorAll('button[type="submit"]');

let cartItems = {};

// Add event listeners to the "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Function to add selected item and quantity to cart
function addToCart(event) {
    event.preventDefault();
    const item = event.target.parentElement.parentElement;
    const itemName = item.querySelector('h3').innerText;
    const itemQuantity = item.querySelector('input[type="number"]').value;
    cartItems[itemName] = itemQuantity;
    updateCart();
}

// Function to update cart list
function updateCart() {
    cartList.innerHTML = '';
    let totalPrice = 0;
    for (let itemName in cartItems) {
        const quantity = cartItems[itemName];
        const itemPrice = getItemPrice(itemName);
        const itemTotalPrice = itemPrice * quantity;
        totalPrice += itemTotalPrice;
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${itemName}:</strong> ${quantity} x $${itemPrice} = $${itemTotalPrice}`;
        cartList.appendChild(listItem);
    }
    const totalPriceItem = document.createElement('li');
    totalPriceItem.innerHTML = `<strong>Total Price:</strong> $${totalPrice}`;
    cartList.appendChild(totalPriceItem);
}

// Function to get the price of a menu item
function getItemPrice(itemName) {
    switch (itemName) {
        case 'Burger':
            return 10;
        case 'Pizza':
            return 15;
        // Add more cases here for other menu items
        default:
            return 0;
    }
}
const placeOrderBtn = document.getElementById('place-btn-id');
const out = document.querySelector(".output");
placeOrderBtn.addEventListener('click', function () {
    // Add "Thank You" message to the page

    // const thankYouMsg = document.createElement('h1');
    // thankYouMsg.textContent = 'Thank You';
    // document.body.appendChild(thankYouMsg);
    out.innerHTML = "Thank You Sir" + "<br>" + "Come Again";
});
