import React, { useState } from "react";
import "../../Authentication.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    data: {},
  });

  console.log(formData);

  const changeInputHandler = (e) => {
    const formDataname = { [e.target.name]: e.target.value };
    console.log(formDataname);
    setFormData((prevData) => {
      return {
        ...prevData,
        data: { ...formData.data, ...formDataname },
      };
    });
  };

  return (
    <div>
      <h3 className="register-heading">ورود به فروشگاه</h3>
      <div className="row register-form">
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="ایمیل *"
              onChange={(e) => changeInputHandler(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="رمز عبور *"
              onChange={(e) => changeInputHandler(e)}
            />
          </div>
          <input type="submit" className="btnRegister" value="ورود" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
