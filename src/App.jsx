import Navbar from "./components/Navbar";
import ProductCart from "./components/ProductCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Kids } from "./components/Kids";

function App() {
  
  return (
  
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/Kids" element={<Kids />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
