import React from "react";
import DeviceDiv from "./DeviceDiv";
import DeviceDivLeft from "./DeviceDivLeft";
import "./SignIn.css";
import tvImage from "../../Assets/tv.png";
import mobileImage from "../../Assets/mobile.jpg";
import devicePile from "../../Assets/device-pile.png";
import cartoon from "../../Assets/cartoon.png";

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
      <div className="break-div"></div>
      <DeviceDiv
        textTitle="Enjoy on your TV."
        text="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        deviceImage={tvImage}
      />
      <div className="break-div"></div>
      <DeviceDivLeft
        textTitle="Download your shows to watch offline."
        text="Save your favourites easily and always have something to watch."
        deviceImage={mobileImage}
      />
      <div className="break-div"></div>
      <DeviceDiv
        textTitle="Watch everywhere."
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        deviceImage={devicePile}
      />
      <div className="break-div"></div>
      <DeviceDivLeft
        textTitle="Create profiles for children."
        text="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        deviceImage={cartoon}
      />
      <div className="break-div"></div>
      <div className="freq-asked">
        <h1>Frequently Asked Questions</h1>
        <div className="question">
          <div className="ques">
            <p>What is Netflix?</p>
            <img src="" alt="" />
          </div>

          <div className="ques-hide"></div>
        </div>

        <div className="question">
          <div className="ques">
            <p>How much does Netflix cost?</p>
            <img src="" alt="" />
          </div>

          <div className="ques-hide"></div>
        </div>

        <div className="question">
          <div className="ques">
            <p>Where can I watch?</p>
            <img src="" alt="" />
          </div>

          <div className="ques-hide"></div>
        </div>

        <div className="question">
          <div className="ques">
            <p>How do I cancel?</p>
            <img src="" alt="" />
          </div>

          <div className="ques-hide"></div>
        </div>

        <div className="question">
          <div className="ques">
            <p>What can I watch on Netflix?</p>
            <img src="" alt="" />
          </div>

          <div className="ques-hide"></div>
        </div>

        <div className="question">
          <div className="ques">
            <p>Is Netflix good for kids?</p>
            <img src="" alt="" />
          </div>

          <div className="ques-hide"></div>
        </div>
        <p className="ready-to">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="email_contents_form footer-form" action="">
          <input
            className="first_email_input"
            type="text"
            placeholder="Email address"
          />
          <button className="get_started_btn">Get Started</button>
        </form>
      </div>
      <div className="break-div"></div>
      <div className="first-footer">
        <p className="footer-head">Questions? Call 000-800-040-1843</p>
        <div className="footer-cards">
          <div className="footer-card">
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div className="footer-card">
            <p>Help Centre</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
          </div>
          <div className="footer-card">
            <p>Account</p>
            <p>Ways to Watch</p>
            <p>Corporate Information</p>
            <p>Only on Netflix</p>
          </div>
          <div className="footer-card">
            <p>Media Centre</p>
            <p>Terms of Use</p>
            <p>Contact Us</p>
          </div>
        </div>
        <button className="btn-english footer-btn">English</button>
        <p className="netflix-india">Netflix India</p>
      </div>
    </div>
  );
};

export default SignIn;
