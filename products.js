const products = [
  { name: "Phone", category: "electronics", price: 299, rating: 4.2 },
  { name: "Shirt", category: "fashion", price: 25, rating: 4.0 },
  { name: "Laptop", category: "electronics", price: 799, rating: 4.5 },
  { name: "Shoes", category: "fashion", price: 60, rating: 4.3 }
];
function displayProducts(data) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  data.forEach(p => {
    container.innerHTML += `<p>${p.name} - ₹${p.price} - ⭐${p.rating}</p>`;
  });
}
function filterProducts() {
  const category = document.getElementById("filter").value;
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}
function sortProducts() {
  const sortBy = document.getElementById("sort").value;
  let sorted = [...products];
  if (sortBy === "price") sorted.sort((a, b) => a.price - b.price);
  if (sortBy === "rating") sorted.sort((a, b) => b.rating - a.rating);
  displayProducts(sorted);
}
window.onload = () => displayProducts(products);