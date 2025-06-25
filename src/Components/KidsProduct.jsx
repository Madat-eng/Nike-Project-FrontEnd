import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function KidsProduct() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const fetchProducts = async () => {
        
        window.scrollTo(0, 0);
      try {
        const mockProducts = [
          {
            id: 7,
            name: "Nike Revolution 6 Kids",
            price: 60,
            image: "/assets/revolution6-kids.jpg",
            category: "running",
          },
          {
            id: 8,
            name: "Nike Court Borough Kids",
            price: 55,
            image: "/assets/courtborough-kids.jpg",
            category: "casual",
          },
          {
            id: 9,
            name: "Nike Tanjun Kids",
            price: 50,
            image: "/assets/tanjun-kids.jpg",
            category: "everyday",
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
              "url('https://www.nikevision.com/uploads/page-headers/Kids-Optical-Boys.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "90vh",
            minHeight: "600px",
          }}
        >
          <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <div className="hero-content position-absolute top-50 start-0 translate-middle-y w-100 ps-5">
            <div className="container">
              <h1 className="display-3 fw-bold mb-4">FOR THE LITTLE ONES</h1>
              <p className="lead mb-5">
                Comfort and style for every step of their journey.
              </p>
              <a
                href="#kids-section"
                className="btn btn-light btn-lg px-4 py-2 fw-bold text-dark"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="kids-section" className="featured-products py-5 bg-light">
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
