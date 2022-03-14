import React, { useState } from "react";
import "./Authentication.css";
import LoginForm from "./Form/Login/Login";
import RegisterForm from "./Form/Register/Register";

const Authentication = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="container register">
      <div className="row">
        <div className="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3>خوش آمدید</h3>
          <p>با پروفایل خود خرید سریع و راحت تری داشته باشید</p>
          {/* <input type="submit" name="" value="Login" /> */}
          <br />
        </div>
        <div className="col-md-9 register-right">
          <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className={isActive === 1 ? "nav-link active" : "nav-link"}
                id="home-tab"
                data-toggle="tab"
                // href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                onClick={() => setIsActive(1)}
              >
                ثبت نام
              </a>
            </li>
            <li className="nav-item">
              <a
                className={isActive === 2 ? "nav-link active" : "nav-link"}
                id="profile-tab"
                data-toggle="tab"
                // href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                onClick={() => setIsActive(2)}
              >
                ورود
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              // className="tab-pane fade show active"
              hidden={isActive === 2}
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <RegisterForm />
            </div>
            <div
              hidden={isActive === 1}
              // className="tab-pane fade show"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
