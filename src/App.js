import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/PageNotFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/PageNotFound" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
