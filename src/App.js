import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import RequireAuth from './Auth/RequireAuth/RequireAuth';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './pages/Dashboard/Dashboard';
export const RequireContext = createContext(null);

function App() {
  const [total, setTotal] = useState(0)
  // const { auth, refetch, user } = useAuth();
  return (
    <div className='h-screen flex flex-col  bg-gray-900'>
      <Toaster />
      <RequireContext.Provider value={{ total, setTotal }}>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </RequireContext.Provider>
    </div>
  );
}

export default App;
