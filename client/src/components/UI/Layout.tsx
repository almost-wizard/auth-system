import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import AppRouter from "../Router/AppRouter";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = () => {
  const { load_user } = useActions();

  useEffect(() => {
    load_user();
  }, []);

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default Layout;
