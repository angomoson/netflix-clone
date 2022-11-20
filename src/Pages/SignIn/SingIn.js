import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import { UserAuth } from "../../components/AuthContext";
import { useNavigate } from "react-router-dom";

const SingIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const redirectHome = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <nav className="signIn-nav">
        <img
          onClick={redirectHome}
          className="nav_logo-sin"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
      </nav>
      <div className="b-wrapper">
        <div className="s-body">
          <h1>Sign In</h1>
          <div className="s-body-content">
            {error && <p className="error-message">{error}</p>}
            <form className="signIn-form" action="">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <button onClick={handleSignInSubmit} className="sign-btn">
                Sign In
              </button>
            </form>
            <div className="remember">
              <div className="re-left">
                <input className="checkB" type="checkBox" />
                <p>Remember me</p>
              </div>

              <p>Need help ?</p>
            </div>
            <p className="new-to">
              New to Netflix?{" "}
              <Link className="sign-up-now" to="/createAccount">
                Sign up now.
              </Link>
            </p>
            <p className="p-google-recap">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.<span className="learn-more">Learn more.</span>
            </p>
          </div>
        </div>
      </div>

      <footer className="signIn-footer">
        <div className="signIn-Q">
          <p>Questions? Call 000-800-040-1843</p>
        </div>
        <div className="signIn-footer-wrapper">
          <div className="signIn-footer-content">
            <p>FAQ</p>
            <p>Cookie Preferences</p>
          </div>
          <div className="signIn-footer-content">
            <p>Help Centre</p>
            <p>Corporate Information</p>
          </div>
          <div className="signIn-footer-content">
            <p>Terms of Use</p>
          </div>
          <div className="signIn-footer-content">
            <p>Privacy</p>
          </div>
        </div>
        <div className="signIn-Q">
          <button className="signIn-footer-btn">English</button>
        </div>
      </footer>
    </div>
  );
};

export default SingIn;
