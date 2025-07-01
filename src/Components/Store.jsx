import { useEffect, useState } from "react";
import CategoriesSection from "./CategoriesSection";
import ProductCard from "./ProductCard";

const Store = () => {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortController = new AbortController();

    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("https://localhost:7172/api/v1/Category", {
          headers: { Accept: "application/json" },
          signal: abortController.signal,
          // credentials: "include", // تم التعليق عليه كما طلبت
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

    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          "https://localhost:7172/api/v1/Product/GetAll",
          {
            headers: { Accept: "application/json" },
            signal: abortController.signal,
          }
        );

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        setFeaturedProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch products error:", error);
          setError("Failed to load products. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
    fetchProducts();

    return () => abortController.abort();
  }, []);

  return (
    <div className="store-page">
      <CategoriesSection categories={categories} />

      <section className="featured-products py-5 bg-light">
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
                <ProductCard key={product.productID} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Store;
