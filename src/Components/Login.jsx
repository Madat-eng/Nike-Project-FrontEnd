import { useState } from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("https://localhost:7172/api/v1/User/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: loginForm.email,
          password: loginForm.password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Login successful:", data);

      setSuccess(`Welcome ${data.fullName}`);
      // ممكن تخزن بيانات المستخدم أو تنتقل لصفحة ثانية هنا
      setLoginForm({ email: "", password: "" });
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
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

          {/* Login Form */}
          <div className="d-flex flex-column justify-content-center align-items-center h-100 ms-4 mt-4">
            <label htmlFor="email" className="w-100 mb-3">
              Email:
              <input
                name="email"
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                value={loginForm.email}
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
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
