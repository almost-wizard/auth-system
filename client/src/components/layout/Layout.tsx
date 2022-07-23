import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { loadUser } from "../../store/auth/auth.actions";
import {
  DEFAULT_LOCALE,
  I18N_MESSAGES,
} from "../../utils/constants/localization.constants";
import { Loader } from "../ui";

interface layoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { locale } = useAppSelector((state) => state.localeReducer);
  const auth = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    if (auth.access) {
      dispatch(loadUser());
    }
  }, [auth.access]);

  if ((auth.access && !auth.user && !auth.error) || auth.isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <IntlProvider
        messages={I18N_MESSAGES[locale]}
        locale={locale}
        defaultLocale={DEFAULT_LOCALE}
      >
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          {children}
        </div>
      </IntlProvider>
    </BrowserRouter>
  );
};

export default Layout;
