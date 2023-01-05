import { Footer } from "./components/Footer";
import NavbarComponent from "./components/NavbarComponent";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Foods from "./views/Foods";
import Beverages from "./views/Beverages";
import Snacks from "./views/Snacks";
import Cart from "./views/Cart";
import { FoodDetail } from "./views/ProductDetail";
import { BeverageDetail } from "./views/ProductDetail";
import { SnackDetail } from "./views/ProductDetail";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Header />
      <Routes>
        <Route path="culinary-app" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="foods" element={<Foods />} />
        <Route path="foods/:id" element={<FoodDetail />} />
        <Route path="beverages" element={<Beverages />} />
        <Route path="beverages/:id" element={<BeverageDetail />} />
        <Route path="snacks" element={<Snacks />} />
        <Route path="snacks/:id" element={<SnackDetail />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
