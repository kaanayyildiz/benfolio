import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Products from "../pages/Products";
import PageNotFound from "../pages/PageNotFound";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
