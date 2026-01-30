const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

cart.forEach(car => {
  total += car.price;
  cartItems.innerHTML += `
    <p>${car.name} - ₹${car.price}</p>
  `;
});

totalEl.innerText = "Total: ₹" + total;