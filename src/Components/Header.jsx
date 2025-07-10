import React from "react";

const Header = () => {
  const navLinks = ["Home", "Explore", "Flight", "Stay", "Contact"];
  return (
    <main className="home">
      <nav>
        <div className="nav-Logo">
          <img src="/Logo/Logo.svg" alt="Logo" />
        </div>
        <div className="nav-Links">
          {navLinks.map((link, index) => (
            <a href={`#${link.toLowerCase()}`} key={index}>
              {link}
            </a>
          ))}
        </div>
        <div className="nav-Language">
          <i class="hgi hgi-stroke hgi-internet"></i>
          <span>EN</span>
          <i class="hgi hgi-stroke hgi-arrow-down-01"></i>
        </div>

        <div className="nav-Menu">
          <i class="hgi hgi-stroke hgi-menu-01"></i>
        </div>
      </nav>
      <div className="home-Content">
        <div className="home-Heading">
          <div className="home-Tag">
            <span></span>
            <p>Award-Winning Travel Experts</p>
          </div>
          <div className="heading-Text">Making Your Escapes Truly Unforgettable Adventures</div>
        </div>

        <div className="home-Content">
          Discover hidden paths, vibrant city corners, and unforgettable
          landscapes, immersing yourself in authentic local culture and stories
          that will stay with you forever.
        </div>
      </div>
    </main>
  );
};

export default Header;
