import { useEffect, useState } from "react";
import CategoriesSection from "./CategoriesSection";
import ProductCard from "./ProductCard";

const Store = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortController = new AbortController();

    const fetchProducts = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://localhost:7172/api/v1/Product/GetAll",
          {
            signal: abortController.signal,
            headers: { Accept: "application/json" },
          }
        );

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        // ضمان أن البيانات Array حتى لو السيرفر رجع شيء غلط
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

    fetchProducts();

    return () => abortController.abort();
  }, []);

  return (
    <div className="store-page">
      <CategoriesSection />

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
                <ProductCard
                  key={product.id || product.productID}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Store;
