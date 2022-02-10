import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';
import { publicRoutes, privateRoutes } from '../router/routes';


const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  console.log(isAuth)
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
