import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Screenshot from "./pages/Screnshoot";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/features" element={<Features />}></Route>
      <Route path="/screenshot" element={<Screenshot />}></Route>
      <Route path="/blog" element={<Blog />}></Route>

    </Routes>
  );
}

export default App;
