import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Store = () => {
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
          {
            id: 4,
            name: "Nike Air Max 270",
            price: 160,
            image: "/assets/airmax270.jpg",
            category: "running",
          },
          {
            id: 5,
            name: "Nike Air Max 270",
            price: 160,
            image: "/assets/airmax270.jpg",
            category: "running",
          },
          {
            id: 6,
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
    <div className="store-page">
      {/* Categories Section */}
      <section className="categories py-5">
        <div className="container">
          {/* <h2 className="text-center mb-5 fw-bold">SHOP BY CATEGORY</h2> */}
          <div className="row g-4">
            <div className="col-md-4">
              <Link to="/men" className="text-decoration-none">
                <div
                  className="category-card position-relative overflow-hidden rounded-3"
                  style={{ height: "300px" }}
                >
                  <img
                    src="../../public/assets/MenImage.jpg"
                    alt="Men's Collection"
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="category-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                    <h3 className="text-white fw-bold">MEN</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/women" className="text-decoration-none">
                <div
                  className="category-card position-relative overflow-hidden rounded-3"
                  style={{ height: "300px" }}
                >
                  <img
                    src="../../public/assets/WomenImage.png"
                    alt="Women's Collection"
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="category-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                    <h3 className="text-white fw-bold">WOMEN</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/kids" className="text-decoration-none">
                <div
                  className="category-card position-relative overflow-hidden rounded-3"
                  style={{ height: "300px" }}
                >
                  <img
                    src="../../public/assets/KidsImage.jpg"
                    alt="Kids' Collection"
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="category-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                    <h3 className="text-white fw-bold">KIDS</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5 bg-light">
        <div className="container">
          {/* <h2 className="text-center mb-5 fw-bold">FEATURED PRODUCTS</h2> */}

          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {featuredProducts.map((product) => (
                <div key={product.id} className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div
                      className="card-img-top"
                      style={{
                        height: "300px",
                        backgroundImage: `url(${product.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text text-muted">${product.price}</p>
                    </div>
                    <div className="card-footer bg-transparent border-0">
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-dark w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Store;
