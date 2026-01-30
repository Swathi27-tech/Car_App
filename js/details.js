const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const car = cars.find(c => c.id === id);

document.getElementById("details").innerHTML = `
  <h2>${car.name}</h2>
  <img src="${car.image}">
  <p>Brand: ${car.brand}</p>
  <p>Fuel: ${car.fuel}</p>
  <p>Mileage: ${car.mileage}</p>
  <p>Transmission: ${car.transmission}</p>
  <p>Price: ₹${car.price}</p>
`;