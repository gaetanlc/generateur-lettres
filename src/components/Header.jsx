// src/components/Header.jsx
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo">
        <span className="logo-icone">✂️</span>
        <span>
          Rési<span className="logo-accent">lettre</span>
        </span>
      </Link>
    </header>
  );
}

export default Header;