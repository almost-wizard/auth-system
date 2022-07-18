import React from "react";
import { FormattedMessage as FM } from "react-intl";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Home: React.FC = () => {
  const isAuthenticated = useTypedSelector(
    (state) => state.auth.isAuthenticated
  );
  const user = useTypedSelector((state) => state.auth.user);
  

  if (isAuthenticated && !user) {   // FixMe // Сделать нормальный лоадер используя loading из state
    return <p>...</p>;
  }

  return (
    <>
      <h1>
        <FM id="home_page_title" />
      </h1>
      <p className="lead">
        <FM id="home_page_text" />
      </p>
      {isAuthenticated ? (
        <p className="lead">
          <FM
            id="home_page_text_authorized"
            values={{ name: `${user?.first_name} ${user?.last_name}` }}
          />
        </p>
      ) : (
        <p className="lead">
          <FM id="home_page_text_unauthorized" />
        </p>
      )}
    </>
  );
};

export default Home;
