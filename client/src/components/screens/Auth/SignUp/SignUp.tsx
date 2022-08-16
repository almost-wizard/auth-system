import React, { useState } from "react";
import { FormattedMessage as FM, useIntl } from "react-intl";
import { useAppDispatch } from "../../../../hooks/redux";
import { useForm } from "../../../../hooks/useForm";
import { signUp } from "../../../../store/auth/auth.actions";
import { IFormData } from "../../../../types/auth/IFormData";
import { InputGroup } from "../../../ui";

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const intl = useIntl();

  const [formData, setFormData] = useState<IFormData>({
    first_name: { value: "", is_valid: null, msg: null },
    last_name: { value: "", is_valid: null, msg: null },
    email: { value: "", is_valid: null, msg: null },
    password: { value: "", is_valid: null, msg: null },
  });

  const { first_name, last_name, email, password, is_form_valid } =
    useForm(formData);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (is_form_valid && email && password && first_name && last_name) {
      dispatch(signUp({ first_name, last_name, email, password }));
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
            required
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        <div className="col-12">
          <InputGroup
            type="text"
            placeholder={intl.formatMessage({ id: "last_name" })}
            name="last_name"
            required
            formData={formData}
            setFormData={setFormData}
          />
        </div>
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
          <button
            disabled={!is_form_valid}
            className="btn btn-primary"
            type="submit"
          >
            <FM id="let_me_in"></FM>
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
