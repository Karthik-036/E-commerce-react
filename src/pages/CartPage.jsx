import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQty } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Your cart is empty.</h2>;
  }

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#fff"}}>Your Cart</h1>

      <div style={styles.cartList}>
        {cart.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} style={styles.image} alt={item.title} />

            <div style={styles.info}>
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>

              <div style={styles.qtyBox}>
                <button onClick={() => updateQty(item.id, item.qty - 1)} style={styles.qtyBtn}>-</button>
                <span style={styles.qty}>{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)} style={styles.qtyBtn}>+</button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                style={styles.removeBtn}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "30px",color: "#fff"}}>Total: ₹{totalPrice.toFixed(2)}</h2>
      <button
  onClick={() => (window.location.href = "/checkout")}
  style={{
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    marginTop: "20px",
    cursor: "pointer",
    fontSize: "16px"
  }}
>
  Proceed to Checkout
</button>
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
  cartList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "20px",
    alignItems: "center",
  },
  card: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "120px",
    height: "120px",
    objectFit: "contain",
    backgroundColor: "#fafafa",
    borderRadius: "10px",
  },
  info: {
    flex: 1,
    textAlign: "left",
  },
  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
  },
  qtyBtn: {
    padding: "6px 12px",
    backgroundColor: "#ddd",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
  },
  qty: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  removeBtn: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "red",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
  },
};