import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./compunents/Navbar";
import Error404 from "./pages/Error404";
import Footer from "./compunents/Footer";
import Blogs from "./pages/Blogs";
import Design from "./pages/Design";
import Login from "./pages/Login";
import Pictures from "./pages/Pictures";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Production from "./pages/Production";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/design" element={<Design />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/production" element={<Production />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <div className="container-fluid">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
