import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NewUser from "./components/NewUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
