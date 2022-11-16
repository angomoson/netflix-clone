import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div>
      <div className="first_banner_contents">
        <header className="first_banner">
          <nav className="first_nav">
            <div className="nav_contents">
              <img
                className="nav_logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt=""
              />
              <div className="nav_buttons">
                <button className="btn-english">English</button>
                <button className="btn-signIn">Sign In</button>
              </div>
            </div>
          </nav>
          <div className="main-contents">
            <h1 className="unlimited_Tv">Unlimited movies, TV</h1>
            <h1 className="unlimited_Tv">shows and more.</h1>
            <p className="watch_anywhere">Watch anywhere. Cancel anytime.</p>
            <p className="ready_to_watch">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="email_contents">
              <form className="email_contents_form" action="">
                <input
                  className="first_email_input"
                  type="text"
                  placeholder="Email address"
                />
                <button className="get_started_btn">Get Started</button>
              </form>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default SignIn;
