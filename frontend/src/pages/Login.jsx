import React, { useState, useContext } from "react";
import axios from "axios";
import "../Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Login() {
  const [active, setActive] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/api/auth/login`, {
        email,
        password,
      });

      if (res.data?.token) {
        login(res.data.token, res.data.user);
        alert("Login successful!");
        navigate("/");
      } else {
        alert("Invalid response from server!");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Login failed!");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendUrl}/api/auth/register`, {
        name,
        email,
        password,
      });
      alert("Signup successful! Please login now.");
      setActive("login");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Signup failed!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out!");
    setActive("login");
  };

  return (
    <section className="user">
      <div className="user_options-container">
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title">Don't have an account?</h2>
            <p className="user_unregistered-text">
              Sign up to explore our collections and enjoy shopping!
            </p>
            <button
              className="user_unregistered-signup"
              onClick={() => setActive("signup")}
            >
              Sign up
            </button>
          </div>

          <div className="user_options-registered">
            <h2 className="user_registered-title">Have an account?</h2>
            <p className="user_registered-text">
              Log in to continue your shopping experience.
            </p>
            <button
              className="user_registered-login"
              onClick={() => setActive("login")}
            >
              Login
            </button>
          </div>
        </div>

        <div
          className={`user_options-forms ${
            active === "signup" ? "bounceLeft" : "bounceRight"
          }`}
        >
          <div
            className={`user_forms-login ${
              active === "login" ? "showForm" : ""
            }`}
          >
            <h2 className="forms_title">Login</h2>
            <form className="forms_form" onSubmit={handleLogin}>
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="forms_field-input"
                    required
                  />
                </div>
              </fieldset>
              <div
                className="forms_buttons"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <button type="button" className="forms_buttons-forgot">
                  Forgot password?
                </button>

                <input
                  type="submit"
                  value="Log In"
                  className="forms_buttons-action"
                />

                {active === "login" && (
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="logout-btn"
                    style={{
                      backgroundColor: "#ef5350",
                      color: "#fff",
                      border: "none",
                      padding: "8px 18px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "500",
                    }}
                  >
                    Logout
                  </button>
                )}
              </div>
            </form>
          </div>

          <div
            className={`user_forms-signup ${
              active === "signup" ? "showForm" : ""
            }`}
          >
            <h2 className="forms_title">Sign Up</h2>
            <form className="forms_form" onSubmit={handleSignup}>
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Full Name"
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="forms_field-input"
                    required
                  />
                </div>
              </fieldset>
              <div
                className="forms_buttons"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <input
                  type="submit"
                  value="Sign up"
                  className="forms_buttons-action"
                />

                {active === "signup" && (
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="logout-btn"
                    style={{
                      backgroundColor: "#ef5350",
                      color: "#fff",
                      border: "none",
                      padding: "8px 18px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "500",
                    }}
                  >
                    Logout
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;