import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit the form
  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    if (signupForm.password !== signupForm.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("https://api.XXXXXXX.com/signup", {
        name: signupForm.name,
        email: signupForm.email,
        password: signupForm.password,
      });
      console.log("Signup successful:", res.data);
      // Handle successful registration
    } catch (err) {
      console.error(err);
      setError("Signup failed. Please try again.");
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

        {/* Signup Form */}
        <div className="d-flex flex-column justify-content-center align-items-center h-100 ms-4 mt-4">
          <label htmlFor="name" className="w-100 mb-3">
            Full Name:
            <input
              name="name"
              type="text"
              className="form-control mt-2"
              placeholder="Full Name"
              value={signupForm.name}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="email" className="w-100 mb-3">
            Email:
            <input
              name="email"
              type="email"
              className="form-control mt-2"
              placeholder="Email"
              value={signupForm.email}
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
              value={signupForm.password}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="confirmPassword" className="w-100 mb-3">
            Confirm Password:
            <input
              name="confirmPassword"
              type="password"
              className="form-control mt-2"
              placeholder="Confirm Password"
              value={signupForm.confirmPassword}
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
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
