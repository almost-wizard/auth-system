import React from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import { DEFAULT_LOCALE, I18N_MESSAGES } from "../data/localization";
import Layout from "./Layout";
import "../styles/App.css";
import { useTypedSelector } from "../hooks/useTypedSelector";

const App: React.FC = () => {
  const locale = useTypedSelector((state) => state.locale.locale);

  return (
    <BrowserRouter>
      <IntlProvider
        messages={I18N_MESSAGES[locale]}
        locale={locale}
        defaultLocale={DEFAULT_LOCALE}
      >
        <Layout />
      </IntlProvider>
    </BrowserRouter>
  );
};

export default App;
