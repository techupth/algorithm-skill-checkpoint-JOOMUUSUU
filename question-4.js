function sortProductsByPrice(products) {
  // Your code here
  for (let i = 0; i < products.length; i++) {
    for (let x = 0; x < products.length - 1; x++) {
      if (products[x].price > products[x + 1].price) {
        const temp = products[x];
        products[x] = products[x + 1];
        products[x + 1] = temp;
      }
    }
  }
  return products;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
