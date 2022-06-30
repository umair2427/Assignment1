import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Edit from "./components/Edit";
import Details from "./components/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/edit/:id" element={<Edit />} />
          <Route exact path="/view/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
