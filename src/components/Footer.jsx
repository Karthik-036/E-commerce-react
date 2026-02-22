export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2026 E-Shop. All Rights Reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1f1f1f",
    color: "#bbb",
    padding: "20px 0",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    boxShadow: "0 -2px 10px rgba(0,0,0,0.5)",
    zIndex: 1000,
  },
  text: {
    margin: 0,
    fontSize: "14px",
    letterSpacing: "0.5px",
  },
};