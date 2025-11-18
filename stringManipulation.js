let product = " wireless headphones PRO ";

product = product.trim().toLowerCase();

let formatted = product
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("Pro", "Pro Edition");

console.log("Cleaned Title:", formatted);
console.log("Length:", formatted.length);
