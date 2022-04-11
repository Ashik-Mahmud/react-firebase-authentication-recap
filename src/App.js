import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import Header from './components/Pages/Header/Header';
import Home from './components/Pages/Home/Home';
import Hotels from './components/Pages/Hotels/Hotels';
import Login from './components/Pages/Login/Login';
function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route  path='/about' element={<About />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/login' element={<Login />} />
      </Routes>
      
    </>
  );
}

export default App;
