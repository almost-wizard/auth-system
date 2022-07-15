import React from "react";
import { FormattedMessage as FM } from "react-intl";

const Error = ({ code = 404, messageId = "err_404" }) => {
  return (
    <>
      <h1>{code}</h1>
      <h3>
        <FM id={messageId}></FM>
      </h3>
    </>
  );
};

export default Error;
