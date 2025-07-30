import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Intro from "./pages/Intro";
import ProductPage from "./pages/ProductPage";
import NewsPage from "./pages/NewsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import GalleryPage from "./pages/GalleryPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import Booking from "./pages/Booking";
import MemberPolicyPage from "./pages/MemberPolicyPage";
import PaymentPolicyPage from "./pages/PaymentPolicyPage";


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
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/member-policy" element={<MemberPolicyPage />} />
        <Route path="/payment-policy" element={<PaymentPolicyPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;