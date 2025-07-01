import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = 7; // لاحقاً ممكن تجيبه ديناميكياً من السياق أو التوكن

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          `https://localhost:7172/api/v1/Basket/${userId}/Items`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const formattedData = data.map((item) => ({
          basketItemID: item.basketItemID,
          productID: item.productID,
          productName: item.productName,
          price: item.price,
          imageURL: item.imageURL || "",
          quantity: item.quantity,
          totalPrice: item.totalPrice,
        }));

        setCartItems(formattedData);
      } catch (err) {
        console.error("Error fetching cart items:", err);
        setError("Failed to load cart items.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const removeFromCart = async (basketItemID) => {
    console.log("Removing basketItemID:", basketItemID);
    try {
      const response = await fetch(
        `https://localhost:7172/api/v1/BasketItems/${basketItemID}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setCartItems(
        cartItems.filter((item) => item.basketItemID !== basketItemID)
      );
    } catch (err) {
      console.error("Error removing item:", err);
      alert("Failed to remove item from cart.");
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4">Your Cart</h2>

      {isLoading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : cartItems.length === 0 ? (
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
                  <tr key={item.basketItemID}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={item.imageURL || "/assets/DefaultCategory.jpg"}
                          alt={item.productName}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                          className="me-3 rounded"
                        />
                        <span>{item.productName}</span>
                      </div>
                    </td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>${item.totalPrice.toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromCart(item.basketItemID)}
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
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
            <button className="btn btn-dark btn-lg">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
