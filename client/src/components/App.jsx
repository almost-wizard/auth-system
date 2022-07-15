import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { DEFAULT_LOCALE } from "../data/localization";
import Layout from "./Layout";
import "../styles/App.css";

const App = () => {
  const locale = useSelector((state) => state.language.locale);
  const messages = useSelector((state) => state.language.messages);

  return (
    <BrowserRouter>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale={DEFAULT_LOCALE}
      >
        <Layout />
      </IntlProvider>
    </BrowserRouter>
  );
};

export default App;
