import React from "react";
import { FormattedMessage as FM } from "react-intl";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setLocale } from "../../../store/locale/locale.slice";
import { get_representative_locales } from "../../../utils/helpers/localization.helpers";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authReducer);
  const location = useLocation().pathname.split("/")[1];

  return (
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">Auth System</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <Link
            className={
              location === ""
                ? "nav-link fw-bold h6 py-auto px-0 active"
                : "nav-link fw-bold h6 py-auto px-0"
            }
            aria-current="page"
            to="/"
          >
            <FM id="home_page" />
          </Link>
          {user ? (
            <Link
              className={
                location === "sign-out"
                  ? "nav-link fw-bold h6 py-auto px-0 active"
                  : "nav-link fw-bold h6 py-auto px-0"
              }
              to="/sign-out"
            >
              <FM id="sign_out_short" />
            </Link>
          ) : (
            <>
              <Link
                className={
                  location === "sign-in"
                    ? "nav-link fw-bold h6 py-auto px-0 active"
                    : "nav-link fw-bold h6 py-auto px-0"
                }
                to="/sign-in"
              >
                <FM id="sign_in_page" />
              </Link>
              <Link
                className={
                  location === "sign-up"
                    ? "nav-link fw-bold h6 py-auto px-0 active"
                    : "nav-link fw-bold h6 py-auto px-0"
                }
                to="/sign-up"
              >
                <FM id="sign_up_page" />
              </Link>
            </>
          )}
          <li className="nav-item dropdown">
            <small
              className="nav-link h6 dropdown-toggle fw-bold"
              id="navbarDropdownMenu"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FM id="language" />
            </small>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenu">
              {get_representative_locales().map(({ name, code }) => (
                <li key={code}>
                  <button
                    className="btn dropdown-item"
                    onClick={() => dispatch(setLocale(code))}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
