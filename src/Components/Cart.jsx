import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Air Jordan 1 Retro",
      price: 180,
      image: "/assets/jordan1.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Nike Air Force 1 '07",
      price: 110,
      image: "/assets/airforce1.jpg",
      quantity: 2,
    },
  ]);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <h4>Your cart is empty.</h4>
          <Link to="/" className="btn btn-dark mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                          className="me-3 rounded"
                        />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price * item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>Total: ${totalPrice}</h4>
            <button className="btn btn-dark btn-lg">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
