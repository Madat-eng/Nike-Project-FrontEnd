import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoriesSection from "./CategoriesSection";
import ProductCard from "./ProductCard";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchRandomProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(
          "https://localhost:7172/api/v1/Product/Random/3",
          {
            signal: abortController.signal,
            headers: { Accept: "application/json" },
          }
        );

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        setFeaturedProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching products:", error);
          setError("Failed to load products. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRandomProducts();

    return () => abortController.abort();
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("https://localhost:7172/api/v1/Category", {
          headers: { Accept: "application/json" },
          signal: abortController.signal,
          // credentials: "include", // تم إزالة هذا السطر
        });

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        setCategories(Array.isArray(data) ? data : []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch categories error:", error);
          setError("Failed to load categories. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();

    return () => abortController.abort();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section position-relative text-white">
        <div
          className="hero-image"
          style={{
            backgroundImage: "url('../../public/assets/Nike_MainPage.jpg')",
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
                The future of sport is here. Shop the latest innovations.
              </p>
              <Link
                to="/store"
                className="btn btn-light btn-lg px-4 py-2 fw-bold text-dark"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">FEATURED PRODUCTS</h2>

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
                <ProductCard
                  key={product.id || product.productID || product.ProductID}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <CategoriesSection categories={categories} />

      {/* Newsletter Section */}
      <section className="newsletter py-5 bg-dark text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="mb-4">STAY CONNECTED</h2>
              <p className="mb-4">
                Subscribe to get updates on new arrivals, special offers and
                other discount information.
              </p>
              <form className="d-flex">
                <input
                  type="email"
                  className="form-control form-control-lg rounded-0"
                  placeholder="Your email address"
                  required
                />
                <button type="submit" className="btn btn-light rounded-0 px-4">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
