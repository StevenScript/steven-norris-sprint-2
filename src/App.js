import "./App.css";
import Header from "./Components/Header";
import ItemCarousel from "./Components/ItemCarousel";
import Footer from "./Components/Footer";
import ChickenMenu from "./Components/ChickenMenu";
import ChFingerMenu from "./Components/ChFingerMenu";
import ChBurgerMenu from "./Components/ChBurgerMenu";
import NuggetsMenu from "./Components/NuggetsMenu";
import SidesMenu from "./Components/SidesMenu";
import GaryDeals from "./Components/GaryDeals";
import OrderPage from "./Components/OrderPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./Components/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Header />
          <Footer />
          <Routes>
            <Route path="/" element={<ItemCarousel />} />
            <Route path="/Index" element={<ItemCarousel />} />
            <Route path="/Chicken-Menu" element={<ChickenMenu />} />
            <Route path="/Ch-Finger-Menu" element={<ChFingerMenu />} />
            <Route path="/Ch-Burger-Menu" element={<ChBurgerMenu />} />
            <Route path="/Nuggets-Menu" element={<NuggetsMenu />} />
            <Route path="/Sides-Menu" element={<SidesMenu />} />
            <Route path="/Gary-Deals" element={<GaryDeals />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
