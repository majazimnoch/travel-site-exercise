import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Company from './components/NavComponents/Company';
import Experiences from './components/NavComponents/Experiences';
import Support from './components/NavComponents/Support';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/company" element={<Company />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
