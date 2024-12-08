import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./pages/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Email from "./pages/Email";
import Access from "./pages/Access";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/email" element={<Email />} />
            <Route path="/access" element={<Access />} />
          </Routes>
        </Main>
      </div>
    </BrowserRouter>
  );
}

export default App;
