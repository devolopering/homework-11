import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import Header from "./components/Header";
import { useState } from "react";
import SingleCountry from "./pages/SingleCountry";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Router>
        <Header setIsOpen={setIsOpen} />
        <Routes>
          <Route
            path='/'
            element={<Countries isOpen={isOpen} setIsOpen={setIsOpen} />}
          />
          <Route path="/countries/:code" element={<div className="max-w-[1140px] mx-auto"><SingleCountry /></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
