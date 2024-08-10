import "./App.css";
import NavBar from "./Components/NavBar";
import OrderPage from "./Components/OrderPage";
import {
  ItemCarousel,
  ChickenMenu,
  ChFingerMenu,
  ChBurgerMenu,
  NuggetsMenu,
  SidesMenu,
  GaryDeals,
} from "./Components/Menus";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./Components/Common/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavBar />
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
