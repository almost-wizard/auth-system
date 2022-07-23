import React from "react";
import { FormattedMessage as FM } from "react-intl";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/redux";
import { verify } from "../../../../store/auth/auth.actions";

const Activate: React.FC = () => {
  const dispatch = useAppDispatch()
  const queryParams = useParams();

  const onSubmit = () => {
    const uid = queryParams.uid;
    const token = queryParams.token;
    if (uid && token) {
      dispatch(verify({ uid, token }));
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
