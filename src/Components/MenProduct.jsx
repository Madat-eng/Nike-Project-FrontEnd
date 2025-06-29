import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function MenProduct() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          "https://localhost:7172/api/v1/Product/ByCategory/men"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // ضيف id موحد لكل منتج من productID
        const productsWithId = Array.isArray(data)
          ? data.map((p) => ({
              ...p,
              id: p.productID, // توحيد الحقل
            }))
          : [];

        setFeaturedProducts(productsWithId);
      } catch (err) {
        setError(err.message || "Failed to load products.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section position-relative text-white">
        <div
          className="hero-image"
          style={{
            backgroundImage:
              "url('https://static.nike.com/a/images/w_2880,h_1410,c_fill,f_auto/32d543a6-5851-4274-8076-2977a06e06db/image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "90vh",
            minHeight: "600px",
          }}
        >
          <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <div className="hero-content position-absolute top-50 start-0 translate-middle-y w-100 ps-5">
            <div className="container">
              <h1 className="display-3 fw-bold mb-4">JUST DO IT</h1>
              <p className="lead mb-5">
                Unleash your potential. The future of men’s performance starts
                now.
              </p>
              <a
                href="#men-section"
                className="btn btn-light btn-lg px-4 py-2 fw-bold text-dark"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="men-section" className="featured-products py-5 bg-light">
        <div className="container">
          {error ? (
            <div className="alert alert-danger text-center">{error}</div>
          ) : isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : featuredProducts.length === 0 ? (
            <div className="text-center py-5">
              <h5>No products found.</h5>
            </div>
          ) : (
            <div className="row g-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
