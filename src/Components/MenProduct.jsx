import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function MenProduct() {


  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      
        window.scrollTo(0, 0);
        
    // Simulate API fetch
    // Giting Random prodicet from Database (use GIUD to randomize)
    const fetchProducts = async () => {
      try {
        // In a real app, you would fetch from your backend
        const mockProducts = [
          {
            id: 1,
            name: "Air Jordan 1 Retro",
            price: 180,
            image: "/assets/jordan1.jpg",
            category: "basketball",
          },
          {
            id: 2,
            name: "Nike Air Force 1 '07",
            price: 110,
            image: "/assets/airforce1.jpg",
            category: "lifestyle",
          },
          {
            id: 3,
            name: "Nike Air Max 270",
            price: 160,
            image: "/assets/airmax270.jpg",
            category: "running",
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
              href="#men-section" // استبدل "men-section" بـ ID القسم الذي تريد الانتقال إليه
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
