import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Perfil from "./components/perfil/Perfil";
import Pages from "./components/pages";
import Error from "./components/Error/Error";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function App() {
// bg-slate-50 dark:bg-slate-950 text-dark dark:text-white font-mono
  return (
    <BrowserRouter>
        <div className=" text-gray-900 dark:text-gray-100 font-sans leading-relaxed tracking-normal bg-gray-100 dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Pages />} />
            <Route path="/perfil/:id" element={<Perfil />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
