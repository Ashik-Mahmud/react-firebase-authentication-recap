import { createContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import Header from './components/Pages/Header/Header';
import Home from './components/Pages/Home/Home';
import Hotels from './components/Pages/Hotels/Hotels';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import useFirebase from './hooks/useFirebase';
export const AuthContext = createContext(null);
function App() {
    const {user, isAuth, setIsAuth} = useFirebase();
  return (
    <>
    <Toaster />
     <AuthContext.Provider value={{user, isAuth, setIsAuth}}>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<RequireAuth><Hotels /></RequireAuth>} />
          <Route  path='/about' element={<About />} />
          <Route path='/checkout' element={<RequireAuth><CheckOut /></RequireAuth>} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
