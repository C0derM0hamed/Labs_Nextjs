fetch("https://104.21.61.23/products?limit=3", {
  headers: {
    "Host": "dummyjson.com"
  }
})
  .then(res => res.json())
  .then(data => console.log("Success:", data.products.length))
  .catch(err => console.error("Error:", err));
