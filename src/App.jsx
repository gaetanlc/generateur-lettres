import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import PageLettre from "./pages/PageLettre";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/lettre/:id" element={<PageLettre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;