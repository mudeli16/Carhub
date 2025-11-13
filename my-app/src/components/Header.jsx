import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>CarHub 🚗</Link>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
         <div className="dropdown">
          <button className="dropbtn">Cars ▾</button>
          <div className="dropdown-content">
            <Link to="/cars/all">All Cars</Link>
            <Link to="/cars/luxury">Luxury Cars</Link>
          </div>
          </div>
        <Link to="/about" style={styles.link}>About</Link>

        <Link to="/contact" style={styles.link}>Contact</Link>

      
          
        
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#282c34",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  logo: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Header;
