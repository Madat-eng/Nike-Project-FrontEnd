export default function Login() {
  return (
    <div className="modal-dialog-centered bg-secondary rounded-3 w-50 w-md-50 p-4 position-relative">
      {/* Nike Logo */}
      <div
        className="position-absolute top-0 start-0 p-1 "
        style={{ width: "60px", height: "60px" }}
      >
        <img
          src="/src/assets/NikeLogoWhite.png"
          alt="Nike Logo"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center h-100 ms-4 mt-4">
        <label className="w-100 mb-3">
          Username:
          <input
            name="username"
            type="text"
            className="form-control mt-2"
            placeholder="Username"
          />
        </label>

        <label className="w-100 mb-3">
          Password:
          <input
            name="password"
            type="password"
            className="form-control mt-2"
            placeholder="Password"
          />
        </label>
      </div>
    </div>
  );
}
