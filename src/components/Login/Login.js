import React, { useState } from "react";
import loginBg from "../../asset/images/login.svg";
import { Link, useNavigate } from "react-router-dom";

import GoogleButton from "react-google-button";
import "../../styles/Login.scss";

import { useUserAuth } from "../../context/UserAuthContext";
import Helmet from "../Helmet/Helmet";
import Banner from "../Banner/Banner";
const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const { logIn, googleSignIn, facebookSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSingIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/")
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFacebookSingIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/")
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <Helmet title="đăng nhập hoặc đăng ký">
     <Banner title="Login and Sign In" />
    <div className="login">
      <div className="login__container">
        <div className="login__container__image">
          <img src={loginBg} alt="" />
        </div>
        <div className="login__container__form">
          <div className="login__container__form__box">
            <div className="login__container__form__box__header">
              <h3>JOIN WITH US</h3>
              <p>
                Don't have an account?{" "}
                Create an account
              </p>
            </div>
            <div className="login__container__form__group">
              <form onSubmit={handleSubmit} action="">
                <div className="login__container__form__group__title">
                  <p>Email Address</p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="login__container__form__group__title">
                  <p>Password</p>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Your password"
                    required
                  />
                </div>
                <div className="login__container__form__group__checkbox">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> Save your password</label>
                  <br />
                </div>
              </form>
            </div>

            <div className="login__container__form__btn">
              <button>LOG IN</button>
              <span>OR</span>
              <div className="login__container__form__btn__methods">
                <div className="login__container__form__btn__methods__google">
                  <GoogleButton type="dark" onClick={handleGoogleSingIn} />
                </div>
                <div onClick={handleFacebookSingIn} className="login__container__form__btn__methods__facebook">
                  {/* <FacebookLogin
                    appId="1088597931155576"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={handleFacebookSingIn}
                    callback={responseFacebook}
                  /> */}
                 Login with facebook
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Helmet>
    </>
  );
};

export default Login;
