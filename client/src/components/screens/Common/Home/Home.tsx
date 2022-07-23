import React from "react";
import { FormattedMessage as FM } from "react-intl";
import { useAppSelector } from "../../../../hooks/redux";

const Home: React.FC = () => {
  const { user } = useAppSelector((state) => state.authReducer);

  return (
    <>
      <h1>
        <FM id="home_page_title" />
      </h1>
      <p className="lead">
        <FM id="home_page_text" />
      </p>
      {user ? (
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
