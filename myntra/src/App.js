
import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import Bag from './components/Bag';
import Wishlsit from './components/Wishlist';
import Profile from './components/Menhover';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wishlist from './components/Wishlist';
import Login from './components/Login';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="bag" element={<Bag/>}/>
        <Route path="wishlist" element={<Wishlist/>}/>
        {/* <Route path="profile" element={<Profile/>}/> */}
        <Route path="login" element={<Login/>}/>
      
       
      </Routes>
    </BrowserRouter>

  );
}

export default App;
