import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { commonRoutes, privateRoutes, publicRoutes } from "../../router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IRoute } from "../../models/IRoute";

const AppRouter: React.FC = () => {
  const isAuthenticated = useTypedSelector(
    (state) => state.auth.isAuthenticated
  );

  const [routes, setRoutes] = useState<IRoute[]>(commonRoutes);

  useEffect(() => {
    if (isAuthenticated) {
      setRoutes([...commonRoutes, ...privateRoutes]);
    } else {
      setRoutes([...commonRoutes, ...publicRoutes]);
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      {routes.map((r: IRoute) => (
        <Route key={r.path} path={r.path} element={<r.element />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
