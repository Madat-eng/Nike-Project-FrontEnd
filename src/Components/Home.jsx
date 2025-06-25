import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoriesSection from "./CategoriesSection";
import ProductCard from "./ProductCard"; 



const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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

      {/* Categories Section */}
      <CategoriesSection />

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
