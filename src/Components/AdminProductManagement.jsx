import { useEffect, useState } from "react";

export default function AdminProductManagement() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    productID: 0,
    name: "",
    price: 0,
    availablePiece: 0,
    description: "",
    categoryID: 0,
    categoryName: "",
    imageURL: "",
    title: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);

  const apiBase = "https://localhost:7172/api/v1/Product";

  useEffect(() => {
    document.title = "Admin";
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setError(null);
      const res = await fetch(`${apiBase}/GetAll`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load products.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      productID: form.productID,
      name: form.name,
      price: parseFloat(form.price),
      availablePiece: parseInt(form.availablePiece),
      description: form.description,
      category: {
        categoryID: parseInt(form.categoryID),
        categoryName: form.categoryName,
      },
      imageURL: form.imageURL,
      title: form.title,
    };

    try {
      setError(null);
      const res = await fetch(apiBase, {
        method: isEditing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      fetchProducts();
      resetForm();
    } catch (err) {
      console.error(err);
      setError("Failed to save product.");
    }
  };

  const handleEdit = (product) => {
    setForm({
      productID: product.productID,
      name: product.name,
      price: product.price,
      availablePiece: product.availablePiece,
      description: product.description,
      categoryID: product.category.categoryID,
      categoryName: product.category.categoryName,
      imageURL: product.imageURL,
      title: product.title,
    });
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    try {
      setError(null);
      const res = await fetch(`${apiBase}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      fetchProducts();
    } catch (err) {
      console.error(err);
      setError("Failed to delete product.");
    }
  };

  const resetForm = () => {
    setForm({
      productID: 0,
      name: "",
      price: 0,
      availablePiece: 0,
      description: "",
      categoryID: 0,
      categoryName: "",
      imageURL: "",
      title: "",
    });
    setIsEditing(false);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Admin Product Management</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="card shadow">
          <div className="card-header bg-dark text-white">
            {isEditing ? "Edit Product" : "Add New Product"}
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-4">
                <label htmlFor="name" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-2">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={form.price}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-2">
                <label htmlFor="availablePiece" className="form-label">
                  Available Pieces
                </label>
                <input
                  type="number"
                  id="availablePiece"
                  name="availablePiece"
                  value={form.availablePiece}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-2">
                <label htmlFor="categoryID" className="form-label">
                  Category ID
                </label>
                <input
                  type="number"
                  id="categoryID"
                  name="categoryID"
                  value={form.categoryID}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="categoryName" className="form-label">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  name="categoryName"
                  value={form.categoryName}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="imageURL" className="form-label">
                  Image URL
                </label>
                <input
                  type="text"
                  id="imageURL"
                  name="imageURL"
                  value={form.imageURL}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="mt-4">
              <button type="submit" className="btn btn-dark me-2">
                {isEditing ? "Update Product" : "Add Product"}
              </button>
              {isEditing && (
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={resetForm}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </form>

      {/* Product Table */}
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.productID}>
                <td>{p.productID}</td>
                <td>
                  <img
                    src={p.imageURL}
                    alt={p.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                    className="rounded"
                  />
                </td>
                <td>{p.name}</td>
                <td>${p.price}</td>
                <td>{p.availablePiece}</td>
                <td>{p.category?.categoryName?.trim()}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleEdit(p)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(p.productID)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
