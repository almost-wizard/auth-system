import React, { useRef } from "react";
import { FormattedMessage as FM, useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AuthenticationService from "../../API/services/AuthenticationService";
import { sign_in } from "../../store/actions/authentication";
import InputGroup from "../UI/InputGroup";

const SignIn = () => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const email = useRef();
  const password = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const expected_errors = [
      email.current.dataset["isvalid"],
      password.current.dataset["isvalid"],
    ];
    if (expected_errors.every((el) => el === "true")) {
      dispatch(sign_in(email.current.value, password.current.value));
    }
  };

  const continue_with_google = async () => {
    const res = await AuthenticationService.continue_with_google();
    window.location.replace(res.data.authorization_url);
  };

  return (
    <>
      <h1>
        <FM id="sign_in_page"></FM>
      </h1>
      <form className="row g-3 text-start" onSubmit={(e) => onSubmit(e)}>
        <div className="col-12">
          <InputGroup
            type="email"
            placeholder={intl.formatMessage({ id: "email" })}
            name="email"
            ref={email}
            required
          />
        </div>
        <div className="col-12">
          <InputGroup
            type="password"
            placeholder={intl.formatMessage({ id: "password" })}
            name="password"
            ref={password}
            required
          />
        </div>
        <div className="col-12">
          <p>
            <FM id="forgot_password" />{" "}
            <Link to="/reset-password">
              <FM id="restore_forgot_password" />
            </Link>
          </p>
        </div>
        <div className="col-5">
          <button className="btn btn-primary w-100" type="submit">
            <FM id="let_me_in"></FM>
          </button>
        </div>
        <div className="col-2 text-center">
          <p className="lead">
            <FM id="or" />
          </p>
        </div>
        <div className="col-5">
          <button
            className="btn btn-danger w-100"
            onClick={() => continue_with_google()}
            type="button"
          >
            <FM id="continue_with_google"></FM>
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
