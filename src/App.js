import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bag from "./components/bag/Bag";
import Catalog from "./components/catalog/Catalog";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/product" element={<Catalog />} />{" "}
          <Route path="/product/:id" element={<Product />} />{" "}
          <Route path="/bag" element={<Bag />} />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
