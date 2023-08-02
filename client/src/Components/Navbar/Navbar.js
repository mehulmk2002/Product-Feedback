import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import myimg from "../../assets/mk.jpeg";
const Navbar = (prop) => {
  const [login_flag, setLogin_flag] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <span style={{ fontSize: "28px" }}>Feedback</span>
      <div className="right-part">
        {prop.isLogIn ? (
          <>
            <div
              className="log-in-btn"
              onClick={() => {
                setTimeout(() => {
                  prop.log_out(false);
                  navigate("/login");
                }, 2000);
              }}
            >
              Log out
            </div>
            <div className="log-in-btn">Hello!</div>{" "}
            <div className="log-in-btn">
              <img
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                src={myimg}
              />
            </div>{" "}
          </>
        ) : (
          <>
            <Link
              style={{ textDecoration: "none", height: "fixContent" }}
              to="/login"
            >
              <div className="log-in-btn">Log in</div>
            </Link>
            <Link
              style={{ textDecoration: "none", height: "fixContent" }}
              to="/signup"
            >
              <div className="sign-up-btn">Sign up</div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
