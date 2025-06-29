import { Link } from "react-router-dom";

export default function CategoriesSection({ categories }) {
  // مصفوفة ثابتة للصور حسب الترتيب الأصلي
  const fixedImages = [
    {
      name: "MEN",
      src: "../../public/assets/MenImage.jpg",
      link: "/store/men",
    },
    {
      name: "WOMEN",
      src: "../../public/assets/WomenImage.png",
      link: "/store/women",
    },
    {
      name: "KIDS",
      src: "../../public/assets/KidsImage.jpg",
      link: "/store/kids",
    },
  ];



  if (!categories || categories.length === 0) return null;

  return (
    <section className="categories py-5">
      <div className="container">
        <div className="row g-4">
          {categories.slice(0, fixedImages.length).map((category, index) => (
            <div
              key={
                category.categoryID ||
                category.CategoryID ||
                category.id ||
                index
              }
              className="col-md-4"
            >
              <Link
                to={fixedImages[index].link}
                className="text-decoration-none"
              >
                <div
                  className="category-card position-relative overflow-hidden rounded-3"
                  style={{ height: "300px" }}
                >
                  <img
                    src={fixedImages[index].src}
                    alt={`${fixedImages[index].name} Collection`}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="category-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                    <h3 className="text-white fw-bold">
                      {fixedImages[index].name}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
