import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, updateQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "UPI"
  });

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    alert("Order Placed Successfully!");
    localStorage.removeItem("cart"); // clear cart
    navigate("/"); // go home
    window.location.reload(); // refresh to sync navbar count
  };

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#fff"}}>Checkout</h1>

      <div style={styles.box}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label>Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={styles.input}
          />

          <label>Address</label>
          <textarea
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            style={styles.textarea}
          />

          <label>Phone Number</label>
          <input
            type="number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={styles.input}
          />

          <label>Payment Method</label>
          <select
            value={form.payment}
            onChange={(e) => setForm({ ...form, payment: e.target.value })}
            style={styles.input}
          >
            <option>UPI</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Cash on Delivery</option>
          </select>

          <button type="submit" style={styles.placeBtn}>
            Place Order (₹{totalPrice.toFixed(2)})
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
  padding: "30px",
  textAlign: "center",
  minHeight: "100vh",
  backgroundColor: "#121212",
  paddingBottom: "80px",
},
  box: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center"
  },
  form: {
    width: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  textarea: {
    padding: "10px",
    height: "80px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  placeBtn: {
    marginTop: "10px",
    padding: "12px",
    backgroundColor: "#28a745",
    color: "#fff",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
  }
};