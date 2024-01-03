import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import {Routes, Route} from 'react-router-dom'
import Packages from "./Pages/Packages/Packages";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </>
  );
}

export default App;
