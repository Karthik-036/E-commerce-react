import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />

      <h3 style={styles.title}>{product.title}</h3>
      <p style={styles.price}>₹{product.price}</p>
      <p style={styles.rating}>⭐ {product.rating.rate}</p>

      <div style={styles.btnRow}>
        <button
          onClick={() => addToCart(product)}
          style={styles.cartBtn}
        >
          Add to Cart
        </button>

        <Link to={`/product/${product.id}`} style={styles.viewBtn}>
          View
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
  backgroundColor: "#1e1e1e",
  borderRadius: "12px",
  padding: "15px",
  width: "230px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "0.3s",
},
cardHover: {
  transform: "scale(1.05)",
},
image: {
  width: "100%",
  height: "160px",
  objectFit: "contain",
  backgroundColor: "#2a2a2a",
  borderRadius: "8px",
  padding: "10px"
},
title: {
  color: "#fff",
  minHeight: "50px",
  marginTop: "10px",
},
price: {
  color: "#00ff99",
  fontWeight: "bold"
},
rating: {
  color: "#ffaa00"
},
  btnRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "auto"
  },
  cartBtn: {
    flex: 1,
    padding: "8px",
    backgroundColor: "#28a745",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
  },
  viewBtn: {
    flex: 1,
    padding: "8px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    textAlign: "center"
  }
};