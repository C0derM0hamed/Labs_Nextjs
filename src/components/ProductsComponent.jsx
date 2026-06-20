import Image from "next/image";
import Link from "next/link";
import React, { useState, useTransition, useDeferredValue } from "react";

const ProductsComponent = ({ products }) => {
  // = State 
  const [searchTerm, setSearchTerm] = useState("");
  const [brand, setBrand] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  //  useTransition 
  // useTransition lets us mark a state update as "non-urgent"
  // The UI stays responsive (isPending = true while React is re-rendering)
  // This is useful when filtering a large list — the input doesn't freeze
  const [filteredSearch, setFilteredSearch] = useState("");
  const [isPending, startTransition] = useTransition();

  // Bonus: useDeferredValue
  // useDeferredValue gives us a "delayed" version of a value
  // React will first render with the OLD value (so the input stays fast)
  // Then it re-renders with the NEW value in the background
  const deferredSearch = useDeferredValue(searchTerm);

  // Get unique brands for the dropdown 
  const brands = [...new Set(products.map((p) => p.brand).filter(Boolean))];

  // Handle search with useTransition
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Mark the filter update as non-urgent
    startTransition(() => {
      setFilteredSearch(value);
    });
  };

  //Filter & Sort Logic
  // Using deferredSearch so the input stays responsive
  let filtered = products.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(deferredSearch.toLowerCase());
    const matchBrand = brand === "" || p.brand === brand;
    return matchSearch && matchBrand;
  });

  // Sort
  if (sortBy) {
    filtered = [...filtered].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] - b[sortBy];
      } else {
        return b[sortBy] - a[sortBy];
      }
    });
  }

  return (
    <div class="container mt-4">
      <h1>Products</h1>

      {/*  Search Input  */}
      <div class="row mb-3">
        <div class="col-md-4">
          <input
            type="text"
            class="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {isPending && <small class="text-muted">Searching...</small>}
        </div>

        {/*Brand Filter */}
        <div class="col-md-3">
          <select class="form-select" value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="">All Brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/*Sort By*/}
        <div class="col-md-3">
          <select class="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sort By</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {/*Sort Order*/}
        <div class="col-md-2">
          <select class="form-select" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {/*  Products Table  */}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Brand</th>
            <th scope="col">Price</th>
            <th scope="col">Rating</th>
            <th scope="col">Image</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.brand || "N/A"}</td>
                <td>${p.price}</td>
                <td>⭐ {p.rating}</td>
                <td><Image src={p.thumbnail} width={80} height={80} alt={p.title}/></td>
                <td><Link href={`/products/${p.id}`} className="btn btn-dark">See More..</Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {filtered.length === 0 && <p class="alert alert-warning">No products found.</p>}
    </div>
  );
};

export default ProductsComponent;
