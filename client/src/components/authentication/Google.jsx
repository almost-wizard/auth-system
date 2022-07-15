import { Navigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { google_authenticate } from "../../store/actions/authentication";

const Google = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const state = searchParams.get("state");
    const code = searchParams.get("code");

    if (state && code) {
      dispatch(google_authenticate(state, code));
    }
  }, [searchParams]);

  return <Navigate to="/" />
};

export default Google;
