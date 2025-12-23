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
import Article6 from "./components/articles/Article6";
import Article7 from "./components/articles/Article7";
import Article8 from "./components/articles/Article8";
import Article9 from "./components/articles/Article9";

import Article1 from "./components/articles/Article1";
import Article2 from "./components/articles/Article2";
import Article3 from "./components/articles/Article3";
import Article4 from "./components/articles/Article4";
import Article5 from "./components/articles/Article5";
import Article10 from "./components/articles/Article10";
import Article11 from "./components/articles/Article11";
import Article12 from "./components/articles/Article12";

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
        <Route path="/blog/article6" element={<Article6 />} />
        <Route path="/blog/article7" element={<Article7 />} />
        <Route path="/blog/article8" element={<Article8 />} />
        <Route path="/blog/article9" element={<Article9 />} />
        <Route path="/blog/article1" element={<Article1 />} />
        <Route path="/blog/article2" element={<Article2 />} />
        <Route path="/blog/article3" element={<Article3 />} />
        <Route path="/blog/article4" element={<Article4 />} />
        <Route path="/blog/article5" element={<Article5 />} />
        import Article10 from "./components/articles/Article10";
import Article11 from "./components/articles/Article11";
import Article12 from "./components/articles/Article12";
      </Routes>

       <Footer />
    </BrowserRouter>
  )
}

export default App
