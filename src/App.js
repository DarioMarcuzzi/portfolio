import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Landing from './components/landing/Landing';
import PerfilDM from './components/perfilDM/PerfilDM';
import PerfilDO from './components/perfilDO/PerfilDO';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfilDM" element={<PerfilDM />} />
        <Route path="/perfilDO" element={<PerfilDO />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
