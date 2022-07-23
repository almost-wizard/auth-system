import React from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../hooks/redux";
import { googleAuthenticate } from "../../../../store/auth/auth.actions";

const Google: React.FC = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const state = searchParams.get("state");
    const code = searchParams.get("code");

    if (state && code) {
      dispatch(googleAuthenticate({ state, code }));
    }
  }, [searchParams]);

  return <Navigate to="/" />;
};

export default Google;
