import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Digital Blood Storage System</h1>
      <p style={styles.subtitle}>Digital System for Blood Donor Management in Tanzania</p>
      <Link to="/login">
        <button style={styles.button}>Get Started</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    padding: "3rem",
    textAlign: "center",
    backgroundColor: "#f7f7f7",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#b30000",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#333",
  },
  button: {
    padding: "0.75rem 2rem",
    fontSize: "1rem",
    backgroundColor: "#b30000",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default HomePage;
