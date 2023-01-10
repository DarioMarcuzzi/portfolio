import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from './components/home/Home';
// import About from './components/about/About';
// import Landing from './components/landing/Landing';
import PerfilDM from "./components/perfilDM/PerfilDM";
import PerfilDO from "./components/perfilDO/PerfilDO";
// import Contact from './components/contact/Contact';
import Pages from "./components/pages";
import Error from "./components/Error/Error";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Pages />} />
        {/* <Route path="/contact" element={<Contact />} />  */}
          <Route path="/perfilDM" element={<PerfilDM />} />
          <Route path="/perfilDO" element={<PerfilDO />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
