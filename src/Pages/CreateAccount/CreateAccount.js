import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../components/AuthContext";
import "./CreateAccount.css";

const CreateAccount = ({ TempEmail }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
    }
  };

  const handleNavButton = () => {
    navigate("/signIn");
  };

  const redirectToHome = () => {
    navigate("/");
  };
  return (
    <div className="create-account">
      <nav className="create-account-nav">
        <img
          onClick={redirectToHome}
          className="nav_logo-create-account"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="create-account-nav-btn" onClick={handleNavButton}>
          Sign In
        </button>
      </nav>
      <hr />
      <div className="create-account-wrapper">
        <h3>STEP 1 OF 1</h3>
        <h1>Create a password to start your membership</h1>
        <p>Just a few more steps and you're done! We hate paperwork, too.</p>
        {error && <p className="error-message">error:{error}</p>}
        <form action="">
          <input
            defaultValue={TempEmail != null ? TempEmail : email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Add a password"
          />
          <button onClick={handleCreateAccount}>Next</button>
        </form>
      </div>
      <footer className="signIn-footer-ca">
        <div className="signIn-Q-ca">
          <p>Questions? Call 000-800-040-1843</p>
        </div>
        <div className="signIn-footer-wrapper-ca">
          <div className="signIn-footer-content-ca">
            <p>FAQ</p>
            <p>Cookie Preferences</p>
          </div>
          <div className="signIn-footer-content-ca">
            <p>Help Centre</p>
            <p>Corporate Information</p>
          </div>
          <div className="signIn-footer-content-ca">
            <p>Terms of Use</p>
          </div>
          <div className="signIn-footer-content-ca">
            <p>Privacy</p>
          </div>
        </div>
        <div className="signIn-Q-ca">
          <button className="signIn-footer-btn-ca">English</button>
        </div>
      </footer>
    </div>
  );
};

export default CreateAccount;
