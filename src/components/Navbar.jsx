import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart(); // get cart items

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>E-Shop</h2>

      <div style={styles.links}>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>Home</Link>
        <Link to="/products" style={{ textDecoration: "none", color: "#fff" }}>Products</Link>

        {/* SHOW CART COUNT HERE */}
        <Link to="/cart" style={{ textDecoration: "none", color: "#fff" }}>Cart ({cart.length})</Link>

        <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 40px",
  alignItems: "center",
  backgroundColor: "#1f1f1f",
  boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
  position: "sticky",
  top: 0,
  zIndex: 1000
},
links: {
  display: "flex",
  gap: "30px",
  fontSize: "16px",
  
},
logo: {
  margin: 0,
  color: "#00bfff"
}
};