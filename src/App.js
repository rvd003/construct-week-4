
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import { Route,Routes } from 'react-router-dom';
import Register from './Components/Register';
import { Pricing } from './Components/Pricing';
import { Dashboard } from './Components/Dashboard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}> </Route>
        <Route path='/subscription' element={<Pricing/>}></Route>
        <Route path='/dash' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
