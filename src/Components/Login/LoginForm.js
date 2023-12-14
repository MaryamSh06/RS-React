import React, { useEffect, useState } from "react";
import "./loginFormStyles.css";
import backIcon from "../../images/icons8-back-24.png";
import showPasswordIcon from "../../images/icons8-show-password-20.png";
import hidePasswordIcon from "../../images/icons8-hide-password-20.png";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({ setConnect, connect }) => {
  const navigate = useNavigate();
  const [loginCridentials, setLoginCridentials] = useState({
    email: "",
    password: "",
  });
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setLoginCridentials((prev) => ({ ...prev, [name]: value }));
    setFormErrors((values) => ({ ...values, [name]: "" }));
  };

  const validate = () => {
    const errors = {};
    const emailValiation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const hasSpecialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (loginCridentials?.email.trim()) {
      if (!loginCridentials?.email?.match(emailValiation)) {
        errors.email = "Invalid email format!";
      } else {
        setLoginCridentials((prev) => ({
          ...prev,
          email: loginCridentials?.email.toLowerCase(),
        }));
      }
    } else {
      errors.email = "Email is required!";
    }
    if (loginCridentials?.password.trim()) {
      if (
        !/[A-Z]/.test(loginCridentials?.password) ||
        !loginCridentials?.password.match(hasSpecialChar) ||
        loginCridentials?.password?.length < 8
      ) {
        errors.password =
          "Password must contain at least 8 characters, including UPPER/lowercase and special Character";
      }
    } else {
      errors.password = "Password is required!";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object?.keys(formErrors).length === 0 && !!isSubmitted) {
      navigate("/home");
    }
  }, [handleSubmit]);

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="loginFormContainer">
          <img
            src={backIcon}
            className="backIcon"
            onClick={() => {
              setConnect(!connect);
            }}
          />

          <div className="formContainer">
            <h1 className="loginTitle">Log In</h1>
            <div className="inputContainer">
              <label htmlFor="email" className="labels">
                Email
              </label>
              <input
                placeholder="e.g. user@example.com"
                name="email"
                id="email"
                onChange={handleChange}
                className="inputFeild"
              />
              <div className="emailErrorContainer">
                {formErrors?.email && (
                  <p className="errorStyle">{formErrors?.email}</p>
                )}
              </div>
            </div>
            <div className="inputContainer">
              <label htmlFor="password" className="labels">
                Password
              </label>
              <div className="passwordContainer">
                <input
                  placeholder="e.g. ********"
                  type={!!visiblePassword ? "text" : "password"}
                  name="password"
                  id="password"
                  onChange={handleChange}
                  className="inputFeild"
                />
                {!!visiblePassword ? (
                  <img
                    src={showPasswordIcon}
                    className="passwordIcons"
                    onClick={() => {
                      setVisiblePassword(!visiblePassword);
                    }}
                  />
                ) : (
                  <img
                    src={hidePasswordIcon}
                    className="passwordIcons"
                    onClick={() => {
                      setVisiblePassword(!visiblePassword);
                    }}
                  />
                )}
              </div>
              <div className="passwordErrorContainer">
                {formErrors?.password && (
                  <p className="errorStyle">{formErrors?.password}</p>
                )}
              </div>
            </div>
            <input className="loginBtn" type="submit" value="Log In" />
          </div>
        </div>
      </form>
    </>
  );
};
