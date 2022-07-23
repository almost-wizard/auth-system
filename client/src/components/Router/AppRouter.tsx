import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { commonRoutes, privateRoutes, publicRoutes } from "./paths";
import { IRoute } from "../../types/router/IRoute";
import { useAppSelector } from "../../hooks/redux";
import { IEvent } from "../../types/router/IEvent";
import { privateEvents, publicEvents } from "./events";

const AppRouter: React.FC = () => {
  const { user } = useAppSelector((state) => state.authReducer);

  const [routes, setRoutes] = useState<IRoute[]>(commonRoutes);
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    if (user) {
      setRoutes([...commonRoutes, ...privateRoutes]);
      setEvents(privateEvents);
    } else {
      setRoutes([...commonRoutes, ...publicRoutes]);
      setEvents(publicEvents);
    }
  }, [user]);

  return (
    <Routes>
      {routes.map((r: IRoute) => (
        <Route key={r.path} path={r.path} element={<r.element />} />
      ))}
      {events.map((e: IEvent) => (
        <Route key={e.path} path={e.path} element={<Navigate to={e.to} />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
