import { useState } from "react";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  // FILTER LOGIC
  let filteredProducts = products.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  // SORT LOGIC
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return (
    <div style={styles.container}>
      <h1>All Products</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* Category Filter */}
      <div style={styles.filterRow}>
        {["all", "men's clothing", "women's clothing", "electronics", "jewelery"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              ...styles.filterBtn,
              backgroundColor: category === cat ? "#00bfff" : "#333",
              color: category === cat ? "#000" : "#fff"
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Sorting */}
      <div style={styles.sortRow}>
        <button onClick={() => setSort("low")} style={styles.sortBtn}>Price: Low → High</button>
        <button onClick={() => setSort("high")} style={styles.sortBtn}>Price: High → Low</button>
        <button onClick={() => setSort("rating")} style={styles.sortBtn}>Rating</button>
      </div>

      {/* Products Grid */}
      <div style={styles.grid}>
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}

        {filteredProducts.length === 0 && <h3>No products found.</h3>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    minHeight: "100vh",
    backgroundColor: "#121212",
    color: "#fff",
    textAlign: "center",
    paddingBottom: "80px"
  },
  search: {
    width: "60%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #444",
    backgroundColor: "#1f1f1f",
    color: "#fff",
    fontSize: "16px",
    marginTop: "20px"
  },
  filterRow: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  filterBtn: {
    padding: "10px 15px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px"
  },
  sortRow: {
    marginTop: "15px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  sortBtn: {
    padding: "8px 15px",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "6px",
    border: "1px solid #444",
    cursor: "pointer"
  },
  grid: {
    marginTop: "30px",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center"
  }
};