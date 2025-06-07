import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/signup" element={<Signup />} />

        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
