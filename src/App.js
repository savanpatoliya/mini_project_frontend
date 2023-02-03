import './App.css';
import SignIn from './components/Sign-in';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
