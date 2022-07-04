import {Navbar} from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Shop } from "./pages/Shop";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="//collections/all" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
