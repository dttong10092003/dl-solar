import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Intro from "./pages/Intro";
import ProductPage from "./pages/ProductPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import GalleryPage from "./pages/GalleryPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import Booking from "./pages/Booking";
import MemberPolicyPage from "./pages/MemberPolicyPage";
import PaymentPolicyPage from "./pages/PaymentPolicyPage";
import ShoppingPolicyPage from "./pages/ShoppingPolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import PurchaseGuidePage from "./pages/PurchaseGuidePage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

import './global.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<Intro />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/member-policy" element={<MemberPolicyPage />} />
        <Route path="/payment-policy" element={<PaymentPolicyPage />} />
        <Route path="/shopping-guide" element={<ShoppingPolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/purchase-guide" element={<PurchaseGuidePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />



        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;