import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Perfil from "./components/perfil/Perfil";
import Pages from "./components/pages";
import Error from "./components/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Pages />} />
          <Route path="/perfil/:id" element={<Perfil />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
