import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from "./components/NavComponents/Company";
import Experiences from "./components/NavComponents/Experiences";
import Support from "./components/NavComponents/Support";
import Welcome from "./components/Welcome";
// import Middle from './components/Middle';
// import Carousel from './components/Carousel/Carousel';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
import Book from "./components/Book";
import PublicMain from "./components/PublicMain";
import { BasketProvider } from "./contexts/basket";

function App() {
  return (
    <BasketProvider>
      <BrowserRouter>
        <div className="App">
          <PublicMain />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/company" element={<Company />} />
            <Route path="/support" element={<Support />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BasketProvider>
  );
}

export default App;
