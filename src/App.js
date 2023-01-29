import { Route, Routes } from 'react-router-dom';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className='h-screen flex flex-col  bg-gray-900'>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Dashboard />}></Route>

      </Routes>

    </div>
  );
}

export default App;
