import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const { addToCart } = useCart();  // <- IMPORTANT

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.title} style={styles.image} />

      <div style={styles.details}>
        <h1>{product.title}</h1>
        <h3>₹{product.price}</h3>
        <p>⭐ {product.rating.rate}</p>
        <p style={{ marginTop: "20px" }}>{product.description}</p>

        {/* CLICK BUTTON TO ADD TO CART */}
        <button
          style={styles.button}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
 container: {
  minHeight: "100vh",
  backgroundColor: "#f5f5f5",
  padding: "30px",
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  paddingBottom: "80px",
},
  image: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  details: {
    maxWidth: "400px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};