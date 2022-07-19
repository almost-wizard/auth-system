import React from "react";
import { FormattedMessage as FM } from "react-intl";
import { Navigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const SignOut: React.FC = () => {
  const { isAuthenticated } = useTypedSelector((store) => store.auth);
  const { sign_out } = useActions();

  if (!isAuthenticated) {
    return <Navigate to="/" />
  }

  return (
    <>
      <h1>
        <FM id="sign_out_page"></FM>
      </h1>
      <button className="btn btn-danger m-5" onClick={() => sign_out()}>
        <FM id="let_me_out"></FM>
      </button>
    </>
  );
};

export default SignOut;
