import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const previousPath = location.state?.from || "/store";

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        setError("Invalid product ID.");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          `https://localhost:7172/api/v1/Product/${productId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setProduct({
          id: data.productID,
          name: data.name,
          price: data.price,
          image: data.imageURL,
          category: data.category?.categoryName?.trim() || "",
          description: data.description,
          availablePiece: data.availablePiece,
          title: data.title,
        });
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError("Failed to load product details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center py-5">
        <h2>{error}</h2>
        <Link to={previousPath} className="btn btn-outline-dark btn-lg">
          Back to Products
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container text-center py-5">
        <h2>Product not found</h2>
        <Link to={previousPath} className="btn btn-outline-dark btn-lg">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/DefaultCategory.jpg";
            }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{product.name}</h2>
          <p className="text-muted mb-2">Category: {product.category}</p>
          <h4 className="text-dark mb-3">${product.price}</h4>
          <p className="mb-4">{product.description}</p>
          <p className="mb-3">Available Pieces: {product.availablePiece}</p>
          <button className="btn btn-dark btn-lg me-3">Add to Cart</button>
          <Link to={previousPath} className="btn btn-outline-dark btn-lg">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
