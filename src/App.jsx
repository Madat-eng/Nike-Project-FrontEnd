import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Store from "./Components/Store";
import MenProduct from "./Components/MenProduct";
import WomenProduct from "./Components/WomenProduct";
import KidsProduct from "./Components/KidsProduct";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<></>}></Route> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store">
          <Route index element={<Store />} />
          <Route path=":productId" element={<ProductDetails />} />
          <Route path="men" element={<MenProduct />} />
          <Route path="women" element={<WomenProduct />} />
          <Route path="kids" element={<KidsProduct />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

        {/* Add more routes here as needed */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
