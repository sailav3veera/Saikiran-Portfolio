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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/PageNotFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/PageNotFound" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
