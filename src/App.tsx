import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Philosophy from "./pages/Philosophy";
import Layout from "./components/Layout";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/philosophy" element={<Layout><Philosophy /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="/team" element={<Layout><Team /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </>
  );
}

export default App;
