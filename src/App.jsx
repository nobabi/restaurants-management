import { Routes, Route } from "react-router";

import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";

import Banner from "./pages/Home/Banner";
import About from "./pages/Home/About";
import Contact from "./pages/Home/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main className="m-0 p-0">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;