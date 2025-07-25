import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Intro from "./pages/Intro";
import ProductPage from "./pages/ProductPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<Intro />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;