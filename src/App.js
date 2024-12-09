import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import Sidebar from "./components/Sidebar";
import Main from "./pages/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Email from "./pages/Email";
import Access from "./pages/Access";
import Cidr from "./pages/contents/Cidr";
import Uuidv1 from "./pages/contents/Uuidv1";
import Uuidv3 from "./pages/contents/Uuidv3";
import Uuidv4 from "./pages/contents/Uuidv4";
import Uuidv5 from "./pages/contents/Uuidv5";
import Cuid from "./pages/contents/Cuid";
import Ulid from "./pages/contents/Ulid";
import Lid from "./pages/contents/Lid";
import Nanoid from "./pages/contents/Nanoid";
import Shortid from "./pages/contents/Shortid";

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
            <Route path="/Cidr" element={<Cidr />} />
            <Route path="/ids/uuidv1" element={<Uuidv1 />} />
            <Route path="/ids/uuidv3" element={<Uuidv3 />} />
            <Route path="/ids/uuidv4" element={<Uuidv4 />} />
            <Route path="/ids/uuidv5" element={<Uuidv5 />} />
            <Route path="/ids/cuid" element={<Cuid />} />
            <Route path="/ids/lid" element={<Lid />} />
            <Route path="/ids/ulid" element={<Ulid />} />
            <Route path="/ids/nanoid" element={<Nanoid />} />
            <Route path="/ids/shortid" element={<Shortid />} />
          </Routes>
        </Main>
      </div>
    </BrowserRouter>
  );
}

export default App;
