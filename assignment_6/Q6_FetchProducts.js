// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Note: In Node.js you may need global fetch available (Node 18+ has it).
// This example is suitable for browser or Node with fetch support.

const PRODUCTS_URL = "https://fakestoreapi.com/products";

async function fetchProducts() {
  try {
    const resp = await fetch(PRODUCTS_URL);
    if (!resp.ok) throw new Error("Network response was not ok");
    const products = await resp.json();
    products.forEach(p => {
      console.log("Product:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
      console.log("---------------------------");
    });
    // Bonus HTML creation (uncomment when running in browser)
    /*
    const container = document.createElement('div');
    products.forEach(p => {
      const card = document.createElement('div');
      card.innerHTML = '<h3>' + p.title + '</h3><p>$' + p.price + '</p><img src="' + p.image + '" width=100/>';
      container.appendChild(card);
    });
    document.body.appendChild(container);
    */
  } catch (err) {
    console.error("Failed to load products. Please try again.", err);
  }
}

// Run demo (will work in browsers; in Node ensure fetch exists)
fetchProducts();
