import React, { useRef } from "react";
import { FormattedMessage as FM, useIntl } from "react-intl";
import { useAppDispatch } from "../../../../hooks/redux";
import { signUp } from "../../../../store/auth/auth.actions";
import { InputGroup } from "../../../ui";

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const intl = useIntl();

  const first_name = useRef<HTMLInputElement>(null);
  const last_name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      email?.current &&
      password?.current &&
      first_name?.current &&
      last_name?.current
    ) {
      const expected_errors = [
        first_name.current.dataset["isvalid"],
        last_name.current.dataset["isvalid"],
        email.current.dataset["isvalid"],
        password.current.dataset["isvalid"],
      ];
      if (expected_errors.every((el) => el === "true")) {
        dispatch(
          signUp({
            first_name: first_name.current.value,
            last_name: last_name.current.value,
            email: email.current.value,
            password: password.current.value,
          })
        );
      }
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
