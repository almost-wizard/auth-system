import React, { useRef } from "react";
import { FormattedMessage as FM, useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { reset_password } from "../../store/actions/authentication";
import InputGroup from "../UI/InputGroup";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const email = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.current.dataset["isvalid"] === "true") {
      dispatch(reset_password(email.current.value));
    }
  };

  return (
    <>
      <h1>
        <FM id="reset_password"></FM>
        <p className="lead">
          <FM id="send_reset_password_request" />
        </p>
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
          <button className="btn btn-primary" type="submit">
            <FM id="send"></FM>
          </button>
        </div>
      </form>
    </>
  );
};

export default ResetPassword;
