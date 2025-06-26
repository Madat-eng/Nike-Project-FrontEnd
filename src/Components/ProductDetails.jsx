import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const navigate = useNavigate();
    const location = useLocation();
    const goBack = () => {
        console.log("Navigating back to:", location.state.from);
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate("/"); // يرجعه للرئيسية إذا ما فيه State محفوظ
      }
    };

  useEffect(() => {
    // محاكاة طلب API لجلب تفاصيل المنتج بناءً على id
    const fetchProduct = async () => {
      try {
        const mockProducts = [
          {
            id: 1,
            name: "Air Jordan 1 Retro",
            price: 180,
            image:
              "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d4a4bcdf-f1cb-44c0-8949-1e6e892cff97/AIR+JORDAN+1+MID.png",
            category: "Basketball",
            description: "Classic performance with iconic style.",
          },
          {
            id: 2,
            name: "Nike Air Force 1 '07",
            price: 110,
            image: "/assets/airforce1.jpg",
            category: "Lifestyle",
            description: "Timeless design for everyday wear.",
          },
          {
            id: 3,
            name: "Nike Air Max 270",
            price: 160,
            image: "/assets/airmax270.jpg",
            category: "Running",
            description: "Unmatched comfort and bold style.",
          },
          // باقي المنتجات إن وجدت...
        ];

        const foundProduct = mockProducts.find(
          (p) => p.id === parseInt(productId)
        );
        setProduct(foundProduct);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

    if (!product) {
    console.log("Product not found for ID:", productId);
    return (
      <div className="container text-center py-5">
        <h2>Product not found</h2>
        {/* <Link to="/" className="btn btn-dark mt-3">
          Back to Products
        </Link> */}
        <button onClick={goBack} className="btn btn-dark mt-3">
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{product.name}</h2>
          <p className="text-muted mb-2">Category: {product.category}</p>
          <h4 className="text-dark mb-3">${product.price}</h4>
          <p className="mb-4">{product.description}</p>
          <button className="btn btn-dark btn-lg me-3">Add to Cart</button>
          <Link to="/" className="btn btn-outline-dark btn-lg">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
