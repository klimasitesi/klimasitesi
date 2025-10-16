import React from 'react';
import klima from '../assets/klima.jpg';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export const Navbar = () => {
  // Menü linkine tıklanınca menüyü kapat
  const closeMenu = () => {
    const checkbox = document.getElementById('menu-toggle');
    if (checkbox) checkbox.checked = false;
  };

  return (
    <div className="navbar">
      <div className="main">
        {/* Logo */}
        <img src={klima} alt="Logo" />

        {/* Hamburger menü butonu */}
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          ☰
        </label>

        {/* Menü Alanı */}
        <div className="navbar-center">
          <Link to="/anasayfa" className="link" onClick={closeMenu}>
            Anasayfa
          </Link>

          <Link to="/iletisim" className="link" onClick={closeMenu}>
            İletişim
          </Link>

          <Link to="/urunler" className="link" onClick={closeMenu}>
            Ürünler
          </Link>
        </div>
          {/* Bu kısım mobilde menüyle birlikte görünsün */}
          <div className="navbar-mobile-contact">
            <a href="tel:08500000000" className="contact-info" onClick={closeMenu}>
              📞 0850 000 0000
            </a>
            <a href="mailto:destek@klimasat.com" className="contact-info" onClick={closeMenu}>
              destek@klimasat.com
            </a>
          </div>

        {/* Masaüstü görünümde sağ tarafta */}
        <div className="navbar-right desktop-contact">
          <a href="tel:08500000000" className="contact-info">
            📞 0850 000 0000
          </a>
          <a href="mailto:destek@klimasat.com" className="contact-info">
            destek@klimasat.com
          </a>
        </div>
      </div>
    </div>
  );
};
