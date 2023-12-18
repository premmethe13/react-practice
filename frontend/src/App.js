import Login from './Components/Login/Login';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './Components/Login/Signup';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/register' element={<Signup></Signup>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
