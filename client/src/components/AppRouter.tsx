import React from "react";
import { Route, Routes } from "react-router-dom";
import { commonRoutes, privateRoutes, publicRoutes } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AppRouter: React.FC = () => {
  const isAuthenticated = useTypedSelector(
    (state) => state.auth.isAuthenticated
  );

  return (
    <Routes>
      {commonRoutes.map((r) => (
        <Route key={r.path} path={r.path} element={r.element} />
      ))}
      {isAuthenticated
        ? privateRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))
        : publicRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
    </Routes>
  );
};

export default AppRouter;
