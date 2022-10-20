import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from '../components/ProtectedRoutes';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route element={<ProtectedRoutes />}>
      <Route path='/home' element={<Home />} />
    </Route>
    <Route path='*' element={<Navigate to='/login' />} />
  </Routes>
);

export default RoutesMain;
