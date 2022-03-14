import React from "react";
import "../../Authentication.css";

const RegisterForm = () => {
  return (
    <div>
      <h3 className="register-heading">ایجاد حساب کاربری</h3>
      <div className="row register-form">
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="نام و نام خانوادگی *"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="ایمیل *"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="رمز عبور *"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
            //   minlength="10"
            //   maxlength="10"
              name="txtEmpPhone"
              className="form-control"
              placeholder="شماره همراه *"
            />
          </div>
          <input type="submit" className="btnRegister" value="ثبت نام" />
          {/* radiuBotton */}
          {/* <div className="form-group">
            <div className="maxl">
              <label className="radio inline">
                <input type="radio" name="gender" value="male" checked />
                <span> Male </span>
              </label>
              <label className="radio inline">
                <input type="radio" name="gender" value="female" />
                <span>Female </span>
              </label>
            </div>
          </div> */}
          {/* selected */}
          {/* <div className="form-group">
            <select className="form-control">
              <option className="hidden" selected disabled>
                Please select your Sequrity Question
              </option>
              <option>What is your Birthdate?</option>
              <option>What is Your old Phone Number</option>
              <option>What is your Pet Name?</option>
            </select>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
