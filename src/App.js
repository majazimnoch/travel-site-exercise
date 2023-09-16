import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from "./components/NavComponents/Company";
import Experiences from "./components/NavComponents/Experiences";
import Support from "./components/NavComponents/Support";
import Welcome from "./components/Welcome";
import { BasketProvider } from "./contexts/basket";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <BasketProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Header />
          <Middle />
          <Carousel />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/company" element={<Company />} />
            <Route path="/support" element={<Support />} />  
          </Routes>
        </div>
      </BrowserRouter>
    </BasketProvider>
  );
}

export default App;
