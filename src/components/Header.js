import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="header bg-secondary p-3">
      <div className="d-flex justify-content-between align-items-center">
        {/* App title */}
        <h1 className="text-light m-0">🏡 Dream Home Builder App</h1>

        {/* Hamburger menu button for mobile */}
        <button
          className="btn btn-outline-light d-md-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Nav links for medium and larger screens */}
        <nav className="d-none d-md-flex gap-3">
          <Link to="/" className="btn btn-light">🏡 Home</Link> {/* Home link */}
          <Link to="/house-accessories" className="btn btn-light">
            🏠 House Accessories
          </Link>
          <Link to="/land-accessories" className="btn btn-light">
            🌿 Land Accessories
          </Link>
          <Link to="/blueprints" className="btn btn-light">
            📐 Blueprints
          </Link>
          <Link to="/parallax" className="btn btn-light">
            🌀 Parallax
          </Link>
        </nav>
      </div>

      {/* Mobile nav links (when menu is open) */}
      {isMenuOpen && (
        <div className="mt-3 d-md-none">
          <Link to="/" className="btn btn-light w-100 mb-2">🏠 Home</Link> {/* Home link */}
          <Link to="/house-accessories" className="btn btn-light w-100 mb-2">
            🏠 House Accessories
          </Link>
          <Link to="/land-accessories" className="btn btn-light w-100 mb-2">
            🌿 Land Accessories
          </Link>
          <Link to="/blueprints" className="btn btn-light w-100">
            📐 Blueprints
          </Link>
          <Link to="/parallax" className="btn btn-light w-100">
            🌀 Parallax
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
