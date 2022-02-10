import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';
import { publicRoutes, privateRoutes } from '../router/routes';
import Loader from './UI/Loader/Loader';


const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }
  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route
            exatc={route.exact}
            path={route.path}
            element={route.component}
            key={route.path}
          />
        )}
        <Route path="*" element={<Navigate replace to="/posts" />} />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route
            exatc={route.exact}
            path={route.path}
            element={route.component}
            key={route.path}
          />
        )}
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
  );
};

export default AppRouter;
