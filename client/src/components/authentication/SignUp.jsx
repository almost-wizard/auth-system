import React, { useRef } from "react";
import { FormattedMessage as FM, useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { sign_up } from "../../store/actions/authentication";
import InputGroup from "../UI/InputGroup";

const SignUp = () => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const first_name = useRef();
  const last_name = useRef();
  const email = useRef();
  const password = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const expected_errors = [
      first_name.current.dataset["isvalid"],
      last_name.current.dataset["isvalid"],
      email.current.dataset["isvalid"],
      password.current.dataset["isvalid"],
    ];
    if (expected_errors.every((el) => el === "true")) {
      dispatch(
        sign_up(
          first_name.current.value,
          last_name.current.value,
          email.current.value,
          password.current.value
        )
      );
    }
  };

  return (
    <>
      <h1>
        <FM id="sign_up_page"></FM>
      </h1>
      <form className="row g-3 text-start" onSubmit={(e) => onSubmit(e)}>
        <div className="col-12">
          <InputGroup
            type="text"
            placeholder={intl.formatMessage({ id: "first_name" })}
            name="first_name"
            ref={first_name}
            required
          />
        </div>
        <div className="col-12">
          <InputGroup
            type="text"
            placeholder={intl.formatMessage({ id: "last_name" })}
            name="last_name"
            ref={last_name}
            required
          />
        </div>
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
          <button className="btn btn-primary" type="submit">
            <FM id="let_me_in"></FM>
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
