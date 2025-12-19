import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from 'react-router-dom';
/*import Layout from './components/Layout';*/
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Hero/Home';
import Pricing from './pages/Pricing';
import Sheets from './pages/Sheets';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import Additional from './components/additional/Additional';
import Rimskiy from "./components/additional/Rimskiy";
import Grieg from "./components/additional/Grieg";
import SaintSaens from "./components/additional/SaintSaens";
import Erlkönig from "./components/additional/Erlkönig";
import TarasBulba from "./components/additional/TarasBulba";
import Turina from "./components/additional/Turina";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sheets" element={<Sheets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/additional" element={<Additional />} />
        <Route path="/additional/Rimskiy" element={<Rimskiy />} />
        <Route path="/additional/Grieg" element={<Grieg />} />
        <Route path="/additional/SaintSaens" element={<SaintSaens />} />
        <Route path="/additional/Erlkönig" element={<Erlkönig />} />
        <Route path="/additional/TarasBulba" element={<TarasBulba />} />
        <Route path="/additional/Turina" element={<Turina />} />
      </Routes>

       <Footer />
    </BrowserRouter>
  )
}

export default App
