import React from "react";
import { useState } from "react";
import { FormattedMessage as FM } from "react-intl";
import { validate } from "../../utils/validation";

const InputGroup = React.forwardRef((props, ref) => {
  const [feedback, setFeedback] = useState({
    is_valid: null,
    feedback_msg_id: null,
  });

  const [isChecked, setIsChecked] = useState(false);

  const onChange = (target) => {
    const params = {
      name: props.name,
      value: target,
    };
    const validation = validate(params);

    if (!target.length) {
      setFeedback({ is_valid: null, feedback_msg_id: null });
    } else if (validation === "valid_field") {
      setFeedback({ is_valid: true, feedback_msg_id: null });
    } else {
      setFeedback({ is_valid: false, feedback_msg_id: validation });
    }
  };

  const onBlur = (target) => {
    if (!target.length && props.required) {
      setFeedback({ is_valid: false, feedback_msg_id: "required_field" });
    }
  };

  return (
    <div className="text-start m-10">
      <label htmlFor={props.name} className="form-label">
        <FM id={props.name} />
      </label>
      <input
        {...props}
        ref={ref}
        id={props.name}
        type={
          isChecked === true && props.type === "password" ? "text" : props.type
        }
        autoComplete={String(props.type === "password")}
        className={
          feedback.is_valid !== null
            ? feedback.is_valid
              ? "form-control is-valid"
              : "form-control is-invalid"
            : "form-control"
        }
        onChange={(e) => onChange(e.target.value)}
        onBlur={(e) => onBlur(e.target.value)}
        data-isvalid={`${feedback.is_valid}`}
      />
      {props.type === "password" && (
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            id={`${props.name}-checkbox`}
          />
          <label
            className="form-check-label"
            htmlFor={`${props.name}-checkbox`}
          >
            <FM id="show_password" />
          </label>
        </div>
      )}

      {feedback.is_valid === false ? (
        <div
          className={feedback.is_valid ? "valid-feedback" : "invalid-feedback "}
        >
          <FM id={feedback.feedback_msg_id} />
        </div>
      ) : (
        <div className="valid-feedback d-block"> </div>
      )}
    </div>
  );
});

export default InputGroup;
