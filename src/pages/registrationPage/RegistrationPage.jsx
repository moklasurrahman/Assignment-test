import React from "react";
import "./registrationPage.scss";
import { NavLink, Outlet } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <main className="main">
      <section className="home relative">
        <div className="item">
          <NavLink
            to=""
            className="link"
            style={({ isActive }) =>
              isActive ? { borderBottom: "2px solid aquamarine" } : {}
            }
          >
            Login
          </NavLink>
          <NavLink
            to="signup"
            className="link"
            style={({ isActive }) =>
              isActive ? { borderBottom: "2px solid aquamarine" } : {}
            }
          >
            Signup
          </NavLink>
        </div>
        <Outlet />
      </section>
    </main>
  );
};

export default RegistrationPage;
