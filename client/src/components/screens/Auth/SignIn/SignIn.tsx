import React, { useState } from "react";
import { FormattedMessage as FM, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import AuthService from "../../../../API/services/AuthService";
import { useAppDispatch } from "../../../../hooks/redux";
import { useForm } from "../../../../hooks/useForm";
import { signIn } from "../../../../store/auth/auth.actions";
import { IFormData } from "../../../../types/auth/IFormData";
import { InputGroup } from "../../../ui";

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const intl = useIntl();

  const [formData, setFormData] = useState<IFormData>({
    email: { value: "", is_valid: null, msg: null },
    password: { value: "", is_valid: null, msg: null },
  });

  const { email, password, is_form_valid } = useForm(formData);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (is_form_valid && email && password) {
      dispatch(signIn({ email, password }));
    }
  };

  const continue_with_google = async () => {
    const res = await AuthService.continue_with_google();
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
            required
            formData={formData}
            setFormData={setFormData}
          />
        </div>
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
          <p>
            <FM id="forgot_password" />{" "}
            <Link to="/reset-password">
              <FM id="restore_forgot_password" />
            </Link>
          </p>
        </div>
        <div className="col-5">
          <button
            disabled={!is_form_valid}
            className="btn btn-primary w-100"
            type="submit"
          >
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
