import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={< ></>} ></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Add more routes here as needed */}
      </Routes>
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
