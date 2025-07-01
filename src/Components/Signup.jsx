import { useState } from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function Signup() {
  const [signupForm, setSignupForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit the form
  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    if (signupForm.password !== signupForm.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://localhost:7172/api/v1/User/SignUp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            fullName: signupForm.fullName,
            email: signupForm.email,
            password: signupForm.password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Signup successful:", data);
      setSuccess(`Account created for ${data.email}`);
      setSignupForm({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error(err);
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ParticlesBackground />
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
            <label htmlFor="fullName" className="w-100 mb-3">
              Full Name:
              <input
                name="fullName"
                type="text"
                className="form-control mt-2"
                placeholder="Full Name"
                value={signupForm.fullName}
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
              <div className="alert alert-danger w-100 text-center">
                {error}
              </div>
            )}
            {success && (
              <div className="alert alert-success w-100 text-center">
                {success}
              </div>
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
    </div>
  );
}
