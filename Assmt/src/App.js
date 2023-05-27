import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Add from './components/Add';


function App() {
  return (
   
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Add/>} />
      </Routes>

    </div>
  );
}

export default App;