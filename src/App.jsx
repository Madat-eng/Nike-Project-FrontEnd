import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Store from "./Components/Store";

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
          <Route
            path=":productId"
            element={<div>This is Product Detals</div>}
          />
          <Route path="men" element={<div>This is Men's Products</div>} />
          <Route path="women" element={<div>This is Women's Products</div>} />
          <Route path="kids" element={<div>This is Kids' Products</div>} />
        </Route>
        <Route path="/" element={<Home />} />

        {/* Add more routes here as needed */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
