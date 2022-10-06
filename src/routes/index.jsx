import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/home' element={<Home />} />
    <Route path='*' element={<Navigate to='/login' />} />
  </Routes>
);

export default RoutesMain;
