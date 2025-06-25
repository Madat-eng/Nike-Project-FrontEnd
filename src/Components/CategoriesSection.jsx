
import { Link } from "react-router-dom";

export default function CategoriesSection() {
  return (
    <>
      {/* Categories Section */}
      <section className="categories py-5">
        <div className="container">
          {/* <h2 className="text-center mb-5 fw-bold">SHOP BY CATEGORY</h2> */}
          <div className="row g-4">
            <div className="col-md-4">
              <Link to="/store/men" className="text-decoration-none">
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
              <Link to="/store/women" className="text-decoration-none">
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
              <Link to="/store/kids" className="text-decoration-none">
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
    </>
  );
}
