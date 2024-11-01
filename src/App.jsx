import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import HomeLayout from './components/home/layout';
import Home from './pages/home/Home';
import Contact from './pages/home/Contact';
import NotFound from './pages/NotFound';
import Analytics from './pages/home/Analytics';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/auth/login" />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/user' element={<HomeLayout/>}>
            <Route path='home' element={<Home/>}/>
            <Route path='analytics' element={<Analytics/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
