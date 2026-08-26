import { Routes, Route } from "react-router";

import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/Home/About";
import Contact from "./pages/Home/Contact";
import Category from "./pages/Category/Category";
import OrderFood from "./pages/OrderFood/OrderFood";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/menu" element={<Menu />} />

          <Route path="/category" element={<Category />} />
          <Route path="/OrderFood/:category" element={<OrderFood />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;