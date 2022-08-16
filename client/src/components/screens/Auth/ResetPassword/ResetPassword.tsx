import React, { useState } from "react";
import { FormattedMessage as FM, useIntl } from "react-intl";
import { useAppDispatch } from "../../../../hooks/redux";
import { useForm } from "../../../../hooks/useForm";
import { resetPassword } from "../../../../store/auth/auth.actions";
import { IFormData } from "../../../../types/auth/IFormData";
import { InputGroup } from "../../../ui";

const ResetPassword: React.FC = () => {
  const dispatch = useAppDispatch();
  const intl = useIntl();

  const [formData, setFormData] = useState<IFormData>({
    email: { value: "", is_valid: null, msg: null },
  });

  const { email, is_form_valid } = useForm(formData);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (is_form_valid && email) {
      dispatch(resetPassword({ email }));
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
            required
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        <div className="col-12">
          <button
            disabled={!is_form_valid}
            className="btn btn-primary"
            type="submit"
          >
            <FM id="send"></FM>
          </button>
        </div>
      </form>
    </>
  );
};

export default ResetPassword;
