import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './pages/Dashboard/Dashboard';
export const RequireContext = createContext(null);

function App() {
  const [total, setTotal] = useState(0)
  return (
    <div className='h-screen flex flex-col  bg-gray-900'>
      <RequireContext.Provider value={{ total, setTotal }}>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </RequireContext.Provider>
    </div>
  );
}

export default App;
