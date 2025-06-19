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
        <nav>
          <ul className="d-flex list-unstyled m-0">
            <li>
              <Link to="/" className={linkStyle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/store" className={linkStyle}>
                Store
              </Link>
            </li>
            <li>
              <Link to="/signup" className={linkStyle}>
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" className={linkStyle}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
