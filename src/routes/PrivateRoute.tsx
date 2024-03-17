import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../store/store';
import IUser from '../store/models/User';
const PrivateRoute = () => {
  const isLoggedIn = useSelector((state: IUser) => store.getState().auth.isAuthenticated);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
