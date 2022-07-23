import React, { useRef } from "react";
import { FormattedMessage as FM, useIntl } from "react-intl";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/redux";
import { resetPasswordConfirm } from "../../../../store/auth/auth.actions";
import { InputGroup } from "../../../ui";

const ResetPasswordConfirm: React.FC = () => {
  const dispatch = useAppDispatch()
  const queryParams = useParams();
  const intl = useIntl();
  const new_password = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uid = queryParams.uid;
    const token = queryParams.token;
    if (
      uid &&
      token &&
      new_password?.current &&
      new_password.current.dataset["isvalid"] === "true"
    ) {
      dispatch(resetPasswordConfirm({uid, token, new_password: new_password.current.value }));
    }
  };

  return (
    <>
      <h1>
        <FM id="reset_password"></FM>
      </h1>
      <form className="row g-3 text-start" onSubmit={(e) => onSubmit(e)}>
        <div className="col-12">
          <InputGroup
            type="password"
            placeholder={intl.formatMessage({ id: "password" })}
            name="password"
            ref={new_password}
            required
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            <FM id="reset_password"></FM>
          </button>
        </div>
      </form>
    </>
  );
};

export default ResetPasswordConfirm;
