import { BrowserRouter, Routes, Route } from 'react-router-dom';

// page components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Destination from './pages/destination/Destination';

// styles
import './App.css';

function App() {


  return (
    <div className={`App`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path='/' element={<Home />} /> 

          <Route path="/create" element={<Create />} />

          <Route path="/search" element={<Search />} />
          
          <Route path="/destinations/:id" element={<Destination />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
