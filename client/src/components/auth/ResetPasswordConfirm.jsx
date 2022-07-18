import React, { useRef } from "react";
import { FormattedMessage as FM, useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { reset_password_confirm } from "../../store/actions/authentication";
import InputGroup from "../UI/InputGroup";

const ResetPasswordConfirm = () => {
  const dispatch = useDispatch();
  const queryParams = useParams();
  const intl = useIntl();
  const new_password = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const uid = queryParams.uid;
    const token = queryParams.token;
    if (new_password.current.dataset["isvalid"] === "true") {
      dispatch(reset_password_confirm(uid, token, new_password.current.value));
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
