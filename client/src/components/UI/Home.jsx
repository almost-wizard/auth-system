import React from "react";
import { FormattedMessage as FM } from "react-intl";
import { useSelector } from "react-redux";

const Home = () => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  const user = useSelector((state) => state.authentication.user);

  if (isAuthenticated && !user) {
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
            values={{ name: `${user.first_name} ${user.last_name}` }}
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
