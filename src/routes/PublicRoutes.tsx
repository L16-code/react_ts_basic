import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import ProtectedRoutes from './ProtectedRoutes';
import routes from './routes';
import MyOrders from '../components/myOrders/MyOrders';
// import Profile from '../components/profile/Profile';
import Login from '../components/auth/Login';
import { WithHeader } from './WithHeader';
import profile from '../components/profile/Profile';
import { useSelector } from 'react-redux';
import { LoginAction, logOutAction } from '../state_management/actions/AuthActions';
import { useDispatch } from 'react-redux';
import { RootState } from '../state_management/reducers';



const PublicRoutes: React.FC = () => {
  // const isAuthenticated = useSelector((state: any) => )
  // console.log(isAuthenticated) 
  const { isLoggedIn } = useSelector((state: RootState) => state.authReducers);
  const isAuthenticated = isLoggedIn;
  const disptach = useDispatch()
  const LogoutHandler = () => {
    disptach(logOutAction())

  }
  return (
    <div>
      <Routes>
        <Route
          path={routes.HOME}
          element={<WithHeader component={Home} route={routes.HOME} isAuthenticated={isAuthenticated}  />}
        />
        <Route
          path={routes.LOGIN}
          element={<WithHeader component={Login} route={routes.LOGIN} isAuthenticated={isAuthenticated}  />}
        />
        <Route
          element={<ProtectedRoutes isAuthenticated={isLoggedIn} />}
        >
          <Route
            path={routes.MYORDERS}
            element={<WithHeader component={MyOrders} route={routes.MYORDERS} isAuthenticated={isLoggedIn}  />}
          />
          <Route
            path={routes.MYPROFILE}
            element={<WithHeader component={profile} route={routes.MYPROFILE} isAuthenticated={isLoggedIn}  />}
          />
        </Route>
        {/* <Route
          path={routes.MYORDERS}
          element={<WithHeader component={MyOrders} route={routes.MYORDERS} isAuthenticated={isAuthenticated} onLogout={LogoutHandler } />}
        />
        <Route
          path={routes.MYPROFILE}
          element={<WithHeader component={profile} route={routes.MYPROFILE} isAuthenticated={isAuthenticated} onLogout={LogoutHandler } />}
        /> */}
      </Routes>
    </div>
  );
};

export default PublicRoutes;
