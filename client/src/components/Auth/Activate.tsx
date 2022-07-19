import React from "react";
import { FormattedMessage as FM } from "react-intl";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";

const Activate: React.FC = () => {
  const { verify } = useActions();
  const queryParams = useParams();

  const onSubmit = () => {
    const uid = queryParams.uid;
    const token = queryParams.token;
    if (uid && token) {
      verify(uid, token);
    }
  };

  return (
    <>
      <h1>
        <FM id="activate_account"></FM>
      </h1>
      <button className="btn btn-success m-5" onClick={() => onSubmit()}>
        <FM id="activate_account_btn"></FM>
      </button>
    </>
  );
};

export default Activate;
