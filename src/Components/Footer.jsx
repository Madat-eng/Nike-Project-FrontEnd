import { Link } from "react-router-dom";

export default function Footer() {
  const linkStyle = "text-decoration-none text-white mx-3";
  const socialLinkStyle = `${linkStyle} fs-4`; // Larger icons for social media

  return (
    <footer className="bg-dark text-white p-4 mt-5">
      <div className="container-fluid">
        <div className="row justify-content-between">
          {/* Nike Info Column */}
          <div className="col-lg-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div style={{ width: "50px" }} className="me-3">
                <img
                  src="/assets/NikeLogoWhite.png"
                  alt="Nike Logo"
                  className="img-fluid"
                />
              </div>
              <h2 className="m-0 fs-3 fw-bold">Nike</h2>
            </div>
            <p className="text-gray-500 text-white ">
              Just Do It. Nike delivers innovative products, experiences and
              services to inspire athletes worldwide.
            </p>
            <div className="d-flex">
              <a
                href="https://www.nike.com"
                className={`${linkStyle} text-primary`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Website
              </a>
              <a
                href="https://jobs.nike.com"
                className={`${linkStyle} text-primary ms-3`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-lg-2 col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/products" className={linkStyle}>
                  All Products
                </Link>
              </li>
              <li className="mb-2">
                <Link to="store/men" className={linkStyle}>
                  Men
                </Link>
              </li>
              <li className="mb-2">
                <Link to="store/women" className={linkStyle}>
                  Women
                </Link>
              </li>
              <li className="mb-2">
                <Link to="store/kids" className={linkStyle}>
                  Kids
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/new-releases" className={linkStyle}>
                  New Releases
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="col-lg-2 col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/contact" className={linkStyle}>
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/faq" className={linkStyle}>
                  FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/shipping" className={linkStyle}>
                  Shipping
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/returns" className={linkStyle}>
                  Returns
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/order-status" className={linkStyle}>
                  Order Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="col-lg-4 col-md-4">
            <h5 className="text-uppercase mb-3">Connect With Us</h5>
            <div className="d-flex mb-3">
              <a
                href="https://facebook.com/nike"
                className={socialLinkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com/nike"
                className={socialLinkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://instagram.com/nike"
                className={socialLinkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://youtube.com/nike"
                className={socialLinkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a
                href="https://linkedin.com/company/nike"
                className={socialLinkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>

            <h5 className="text-uppercase mb-3 mt-4">Company Info</h5>
            <ul className="list-unstyled small">
              <li className="mb-1">
                <Link
                  to="/about"
                  className="text-gray-500 text-white text-decoration-none"
                >
                  About Nike
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/sustainability"
                  className="text-gray-500 text-white text-decoration-none"
                >
                  Sustainability
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/news"
                  className="text-gray-500 text-white text-decoration-none"
                >
                  Newsroom
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/investors"
                  className="text-gray-500 text-white text-decoration-none"
                >
                  Investors
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row mt-4 pt-3 border-top">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-gray-500 text-white small m-0">
              © 2025 Nike, Inc. All Rights Reserved
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link
              to="/privacy"
              className="  text-white small me-3 text-decoration-none"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="  text-white small me-3 text-decoration-none"
            >
              Terms of Use
            </Link>
            <Link
              to="/cookies"
              className="  text-white small me-3 text-decoration-none"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
