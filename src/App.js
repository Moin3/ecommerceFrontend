import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import {BrowserRouter, Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
