//essentials
import './App.css';
import { Routes, Route } from 'react-router-dom'

//components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Episode from './components/Episode';

//main function
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/episode' element={<Episode/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
