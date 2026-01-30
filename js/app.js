const carList = document.getElementById("carList");
const fuelFilter = document.getElementById("fuelFilter");

function displayCars(carArray) {
  carList.innerHTML = "";
  carArray.forEach(car => {
    carList.innerHTML += `
      <div class="card">
        <img src="${car.image}">
        <h3>${car.name}</h3>
        <p>₹${car.price}</p>
        <p>${car.fuel}</p>
        <a href="car_deatils.html?id=${car.id}">View</a>
        <button onclick="addToCart(${car.id})">Add to Cart</button>
      </div>
    `;
  });
}

displayCars(cars);

fuelFilter.addEventListener("change", () => {
  const value = fuelFilter.value;
  if (value === "All") {
    displayCars(cars);
  } else {
    const filtered = cars.filter(car => car.fuel === value);
    displayCars(filtered);
  }
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const selectedCar = cars.find(car => car.id === id);
  cart.push(selectedCar);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Car added to cart!");
}