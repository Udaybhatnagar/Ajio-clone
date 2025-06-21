import Navbar from "./components/Navbar";
import ProductCart from "./components/ProductCart";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Kids } from "./components/Kids";
import { Mens } from "./components/Mens";
import { Women } from "./components/Women";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<LandingPage/>} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Mens" element={<Mens />} />
          <Route path="/Women" element={<Women />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <div style={{height:"90vh"}}>
        <Outlet />
      </div>
    </div>
  );
}
function LandingPage() {
  return (
    <div>
     
      <ProductCart />
    </div>
  );
}

export default App;
