export default function HomePage() {
  return (
    <div style={styles.container}>
      
      {/* HERO SECTION */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Welcome to E-Shop</h1>
        <p style={styles.subtitle}>
          Discover the best deals. Shop smart, shop fast.
        </p>
        <a
  href="/products"
  style={styles.button}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.1)";
    e.target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.7)";
    e.target.style.backgroundColor = "#00e0ff";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
    e.target.style.backgroundColor = "#00bfff";
  }}
>
  Browse Products
</a>
      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#121212",
    paddingBottom: "80px",
  },
  hero: {
    width: "100%",
    height: "100vh",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1400&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    padding: "20px",
    boxShadow: "0 4px 25px rgba(0,0,0,0.6)",
  },
  title: {
  fontSize: "48px",
  fontWeight: "bold",
  color: "#00bfff",
  textShadow: "0 3px 10px rgba(0,0,0,0.9)"
},
subtitle: {
  fontSize: "20px",
  color: "#e0e0e0",
  marginTop: "10px",
  marginBottom: "20px",
  textShadow: "0 2px 6px rgba(0,0,0,0.8)"
},
 button: {
  padding: "14px 28px",
  backgroundColor: "#00bfff",
  color: "#000",
  borderRadius: "8px",
  fontWeight: "bold",
  textDecoration: "none",
  fontSize: "18px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
  marginTop: "10px",
  border: "2px solid white",
  transition: "0.3s ease",          
  transform: "scale(1)",
}
};