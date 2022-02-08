//essentials
import './App.css';
import { Routes, Route } from 'react-router-dom'

//components
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

//main function
function App() {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
