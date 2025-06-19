import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    Email: "",
    password: "",
  });
  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    setLoading(true);
    //TODO: Replace with your API endpoint
    setError("");

    try {
      const res = await axios.post("https://api.XXXXXXX.com/login", loginForm);
      console.log("Login successful:", res.data);
      // Navigate or save token here
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="position-relative bg-secondary rounded-3 p-4 w-100 m-2"
        style={{ maxWidth: "500px" }}
      >
        {/* Logo */}
        <div
          className="position-absolute top-0 start-0 p-1"
          style={{ width: "60px", height: "60px" }}
        >
          <img
            src="/assets/NikeLogoWhite.png"
            alt="Nike Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Login Form */}
        <div className="d-flex flex-column justify-content-center align-items-center h-100 ms-4 mt-4">
          <label htmlFor="email" className="w-100 mb-3">
            Username:
            <input
              name="Email"
              type="email"
              className="form-control mt-2"
              placeholder="Email"
              value={loginForm.Email}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="password" className="w-100 mb-3">
            Password:
            <input
              name="password"
              type="password"
              className="form-control mt-2"
              placeholder="Password"
              value={loginForm.password}
              onChange={handleChange}
            />
          </label>

          {error && (
            <div className="alert alert-danger w-70 text-center">{error}</div>
          )}

          <button
            onClick={handleSubmit}
            className="btn btn-danger w-50 mt-2"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
