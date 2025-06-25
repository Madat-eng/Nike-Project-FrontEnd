import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function WomenProduct() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    const fetchProducts = async () => {
      try {
        const mockProducts = [
          {
            id: 4,
            name: "Nike Air Max 90 Women's",
            price: 130,
            image: "/assets/airmax90-women.jpg",
            category: "lifestyle",
          },
          {
            id: 5,
            name: "Nike Free RN Women's",
            price: 100,
            image: "/assets/freern-women.jpg",
            category: "running",
          },
          {
            id: 6,
            name: "Nike Court Vision Women's",
            price: 85,
            image: "/assets/courtvision-women.jpg",
            category: "casual",
          },
        ];
        setFeaturedProducts(mockProducts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // function StorePage() {
  //     useEffect(() => {
  //       window.scrollTo(0, 0); // ينتقل إلى الأعلى عند تحميل الصفحة
  //     }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section position-relative text-white">
        <div
          className="hero-image"
          style={{
            backgroundImage:
              "url('https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1920,c_limit/2695fd7f-2fc0-44d5-8df5-6b0ee98b464d/nike-membership.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "90vh",
            minHeight: "600px",
          }}
        >
          <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <div className="hero-content position-absolute top-50 start-0 translate-middle-y w-100 ps-5">
            <div className="container">
              <h1 className="display-3 fw-bold mb-4">STYLE FOR HER</h1>
              <p className="lead mb-5">
                Discover the latest in women's fashion and performance.
              </p>
              <a
                href="#women-section"
                className="btn btn-light btn-lg px-4 py-2 fw-bold text-dark"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="women-section" className="featured-products py-5 bg-light">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
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
