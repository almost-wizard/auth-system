import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { load_user } from "../store/actions/authentication";
import AppRouter from "./AppRouter";
import Footer from "./UI/Footer";
import Header from "./UI/Header";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load_user());
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
