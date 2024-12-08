import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="content"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
