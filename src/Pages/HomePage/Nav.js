import React, { useEffect, useState } from "react";
import "./Nav.css";
import { UserAuth } from "../../components/AuthContext";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/signIn");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <div className="home-nav-right">
          <p>{user && user.email}</p>
          <h3 className="log-out-btn" onClick={handleLogOut}>
            Log Out
          </h3>
          <img
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
