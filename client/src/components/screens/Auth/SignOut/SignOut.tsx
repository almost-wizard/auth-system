import React from "react";
import { FormattedMessage as FM } from "react-intl";
import { useAppDispatch } from "../../../../hooks/redux";
import { signOut } from "../../../../store/auth/auth.slice";

const SignOut: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <h1>
        <FM id="sign_out_page"></FM>
      </h1>
      <button className="btn btn-danger m-5" onClick={() => dispatch(signOut())}>
        <FM id="let_me_out"></FM>
      </button>
    </>
  );
};

export default SignOut;
