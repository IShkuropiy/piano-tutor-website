import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from 'react-router-dom';
/*import Layout from './components/Layout';*/
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Hero/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Sheets from './pages/Sheets';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sheets" element={<Sheets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
       <Footer />
    </BrowserRouter>
  )
}

export default App
