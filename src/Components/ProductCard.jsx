import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="col-md-4">
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
            to={`/store/${product.id}`}
            state={{ from: window.location.pathname }}
            className="btn btn-dark w-100"
          >
          
            View Details
          </Link>

          {/* <Link
            to={`/product/${product.id}`}
            state={{ from: window.location.pathname }}
            className="btn btn-dark w-100"
          >
            View Details
          </Link> */}
        </div>
      </div>
    </div>
  );
}
