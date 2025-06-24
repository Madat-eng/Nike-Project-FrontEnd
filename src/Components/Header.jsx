import { Link } from "react-router-dom";

export default function Header() {
  const linkStyle = "text-decoration-none text-white fs-5 mx-3";

  return (
    <header className="bg-dark text-white p-3 sticky-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo With Text*/}
        <div className="d-flex align-items-center">
          <div className="me-3" style={{ width: "50px" }}>
            <img
              src="/assets/NikeLogoWhite.png"
              alt="Nike Logo"
              className="img-fluid"
            />
          </div>
          <h1 className="m-0 fs-3 fw-bold d-none d-sm-block">Nike</h1>
        </div>

        {/* Nav */}
        <nav className="navbar navbar-expand-md p-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              src="/public/assets/Burger Menu Icon.png"
              alt="Menu"
              style={{ width: "24px", height: "24px" }}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className={`nav-link ${linkStyle}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/store" className={`nav-link ${linkStyle}`}>
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className={`nav-link ${linkStyle}`}>
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className={`nav-link ${linkStyle}`}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
