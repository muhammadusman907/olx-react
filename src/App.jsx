import logo from './logo.svg';
import './App.css';
import { MyNavbar } from "./component/Navbar.jsx"; 
import MyCard from './component/Card.jsx'
import { About } from './About.jsx';
import { Routes ,Route } from 'react-router-dom';
import { Home } from './Home.jsx';
import { Login } from './login/Login.jsx';
function App() {
  return (
    <>
<div className="App">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="about" element={ <About/> } />
        <Route path="login" element={<Login/>}></Route>
      </Routes>
    </div>
   
    </>

  );
}

export default App;
