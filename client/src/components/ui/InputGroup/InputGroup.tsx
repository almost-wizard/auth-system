import React, { useState } from "react";
import { FormattedMessage as FM } from "react-intl";
import { IFormData } from "../../../types/auth/IFormData";
import { validate } from "../../../utils/helpers/validation.helpers";

interface inputGroupProps {
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  formData: IFormData;
  setFormData: (formData: IFormData) => void;
}

const InputGroup: React.FC<inputGroupProps> = (props) => {
  const { type, name, formData, setFormData } = props;
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChange = (value: string) => {
    if (!value.length) {
      setFormData({
        ...formData,
        [name]: { value, is_valid: null, msg: null },
      });
      return;
    }

    const [is_valid, msg] = validate({ name, value });

    setFormData({
      ...formData,
      [name]: { value, is_valid, msg },
    });
  };

  const onBlur = (value: string) => {
    if (!value.length && props.required) {
      setFormData({
        ...formData,
        [name]: {
          ...formData[name],
          is_valid: false,
          msg: "required_field",
        },
      });
    }
  };

  const get_className = (formData: IFormData) => {
    return formData[name].is_valid !== null
      ? formData[name].is_valid
        ? "form-control is-valid"
        : "form-control is-invalid"
      : "form-control";
  };

  return (
    <div className="text-start m-10">
      <label htmlFor={name} className="form-label">
        <FM id={name} />
      </label>

      <input
        {...props}
        id={name}
        type={isChecked === true && type === "password" ? "text" : type}
        autoComplete="true"
        className={get_className(formData)}
        onChange={(e) => onChange(e.target.value)}
        onBlur={(e) => onBlur(e.target.value)}
      />

      {type === "password" && (
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            id={`${name}-checkbox`}
          />
          <label className="form-check-label" htmlFor={`${name}-checkbox`}>
            <FM id="show_password" />
          </label>
        </div>
      )}

      {formData[name].is_valid === false ? (
        <div
          className={
            formData[name].is_valid ? "valid-feedback" : "invalid-feedback"
          }
        >
          {formData[name].msg && <FM id={formData[name].msg} />}
        </div>
      ) : (
        <div className="valid-feedback d-block"> </div>
      )}
    </div>
  );
};
export default InputGroup;
