import React from "react";
import { useDispatch } from "react-redux";
import { FormattedMessage as FM } from "react-intl";
import { sign_out } from "../../store/actions/authentication";

const SignOut = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>
        <FM id="sign_out_page"></FM>
      </h1>
      <button
        className="btn btn-danger m-5"
        onClick={() => dispatch(sign_out())}
      >
        <FM id="let_me_out"></FM>
      </button>
    </>
  );
};

export default SignOut;
