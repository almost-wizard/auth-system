import React, { useRef } from "react";
import { FormattedMessage as FM, useIntl } from "react-intl";
import { useAppDispatch } from "../../../../hooks/redux";
import { resetPassword } from "../../../../store/auth/auth.actions";
import { InputGroup } from "../../../ui";

const ResetPassword: React.FC = () => {
  const dispatch = useAppDispatch()
  const intl = useIntl();
  const email = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email?.current && email.current?.dataset["isvalid"] === "true") {
      dispatch(resetPassword({ email: email.current.value }));
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
