async function loadCards() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    const box = document.getElementById("products");

    products.forEach(p => {
      const card = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("h3");
      const price = document.createElement("p");

      img.src = p.image;
      title.textContent = p.title;
      price.textContent = "$" + p.price;

      card.append(img, title, price);
      box.appendChild(card);
    });
  } catch {
    document.body.innerHTML = "Failed to load products. Please try again.";
  }
}

loadCards();
