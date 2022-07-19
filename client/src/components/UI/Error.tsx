import React from "react";
import { FormattedMessage as FM } from "react-intl";

interface errorProps {
  code?: number;
  intl_message_id?: string;
  children?: React.ReactNode;
}

const Error: React.FC<errorProps> = ({
  code = 404,
  intl_message_id = "err_404",
}) => {
  return (
    <>
      <h1>{code}</h1>
      <h3>
        <FM id={intl_message_id}></FM>
      </h3>
    </>
  );
};

export default Error;
