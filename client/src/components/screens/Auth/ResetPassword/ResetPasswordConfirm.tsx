import React, { useState } from "react";
import { FormattedMessage as FM, useIntl } from "react-intl";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/redux";
import { useForm } from "../../../../hooks/useForm";
import { resetPasswordConfirm } from "../../../../store/auth/auth.actions";
import { IFormData } from "../../../../types/auth/IFormData";
import { InputGroup } from "../../../ui";

const ResetPasswordConfirm: React.FC = () => {
  const dispatch = useAppDispatch();
  const queryParams = useParams();
  const intl = useIntl();

  const [formData, setFormData] = useState<IFormData>({
    password: { value: "", is_valid: null, msg: null },
  });

  const { password, is_form_valid } = useForm(formData);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uid = queryParams.uid;
    const token = queryParams.token;
    if (is_form_valid && password && uid && token) {
      dispatch(resetPasswordConfirm({ uid, token, new_password: password }));
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
            <FM id="reset_password"></FM>
          </button>
        </div>
      </form>
    </>
  );
};

export default ResetPasswordConfirm;
