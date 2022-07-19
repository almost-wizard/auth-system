import React, { useRef } from "react";
import { FormattedMessage as FM, useIntl } from "react-intl";
import { useActions } from "../../hooks/useActions";
import InputGroup from "../UI/InputGroup";

const ResetPassword: React.FC = () => {
  const { reset_password } = useActions();
  const intl = useIntl();
  const email = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email?.current && email.current?.dataset["isvalid"] === "true") {
      reset_password(email.current.value);
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
