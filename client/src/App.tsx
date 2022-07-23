import React from "react";
import Layout from "./components/layout/Layout";
import Header from "./components/layout/Header";
import AppRouter from "./components/router/AppRouter";
import Footer from "./components/layout/Footer";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <AppRouter />
      <Footer />
    </Layout>
  );
};

export default App;
