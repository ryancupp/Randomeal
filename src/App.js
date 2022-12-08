import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Button from './components/Button';
import Random from './components/Random';
import Map from './components/Map';

function App() {
  
  return (
    <div className="App">
      <h1 style={{ fontSize: "100px" }}>rand<span style={{ color: "pink" }}>o</span>meal</h1>
      
      <Routes>
        <Route path='/' element={<Button />} />
        <Route path='/random' element={<Random />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
