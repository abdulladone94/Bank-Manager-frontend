import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NewUser from "./components/NewUser";
import Persons from "./components/Persons";
import Banks from "./components/Banks";
import BankWiseAccounts from "./components/BankWiseAccounts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/banks" element={<Banks />} />
        <Route path="/persons" element={<Persons />} />
        <Route path="/bankWiseAccounts" element={<BankWiseAccounts />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
