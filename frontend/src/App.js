import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Invest from "./pages/Invest";
import Budget from "./pages/Budget";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </Router>
  );
}

export default App;
