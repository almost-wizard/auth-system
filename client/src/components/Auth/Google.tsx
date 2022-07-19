import React from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";

const Google: React.FC = () => {
  const { google_authenticate } = useActions();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const state = searchParams.get("state");
    const code = searchParams.get("code");

    if (state && code) {
      google_authenticate(state, code);
    }
  }, [searchParams]);

  return <Navigate to="/" />;
};

export default Google;
