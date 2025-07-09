import React from "react";

const Footer = () => {
  const quickLinks = ["Home", "Explore", "Flight", "Stay"];
  const aboutLinks = ["Company", "Destination", "Wonders", "Careers"];
  const helpLinks = ["Help Center", "Support Team", "Community", "FAQs"];
  const legalLinks = ["Terms & Conditions", "Privacy Policy"];

  return (
    <footer>
      {/* Footer Upper Container */}
      <div className="footer-Upper">
        {/* Left Container */}
        <div className="upperLeft-Footer">
          <div className="upperLeft-Text">
            <img
              src="/Logo/Logo.svg"
              alt="Logo"
              className="w-auto h-8 md:h-10"
            />
            <p>
              Follow us on social media for the latest updates, offers, and
              exciting news. Join our community and be a part of the
              ride-sharing revolution!
            </p>
          </div>
          <div className="upperLeft-Icons">
            <i class="hgi hgi-stroke hgi-instagram"></i>
            <i class="hgi hgi-stroke hgi-new-twitter"></i>
            <i class="hgi hgi-stroke hgi-youtube"></i>
            <i class="hgi hgi-stroke hgi-facebook-02"></i>
          </div>
        </div>
        {/* Right Container */}
        <div className="upperRight-Footer ">
          <div className="upperRight-Links">
            <h1>Quick Links</h1>
            <div className="link-Map">
              {quickLinks.map((link, index) => (
                <a key={index} href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="upperRight-Links">
            <h1>About</h1>
            <div className="link-Map">
              {aboutLinks.map((link, index) => (
                <a key={index} href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="upperRight-Links">
            <h1>Help</h1>
            <div className="link-Map">
              {helpLinks.map((link, index) => (
                <a key={index} href="#">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="upperRight-Links">
            <h1>Legal</h1>
            <div className="link-Map">
              {legalLinks.map((link, index) => (
                <a key={index} href="#">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Divider */}
      <hr className="footer-Divider" />

      {/* Footer Lower Container */}
      <div className="footer-Lower">
        <div className="lowerLeft-Footer">
          <a
            href="https://saad-shaikh.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Copyright &copy; {new Date().getFullYear()} All rights reserved.
          </a>
        </div>

        <div className="lowerRight-Footer">
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
