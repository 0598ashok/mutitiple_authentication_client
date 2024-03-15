import React, { useState } from "react";
import ramisettylogo from "../images/ramisetty_logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiList from "../ApiList/ApiList";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("login");

  const [users, setUsers] = useState({
    employeetype: "",
    name: "",
    email: "",
    contactnumber: "",
    password: "",
    confirmpassword: "",
  });

  const {
    employeetype,
    name,
    email,
    contactnumber,
    password,
    confirmpassword,
  } = users;

  const handleChnage = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post(apiList.signup, users)
      .then((res) => {
        if (res.status === 200) {
          setLogin("login");
          setUsers({
            employeetype: "",
            name: "",
            email: "",
            contactnumber: "",
            password: "",
            confirmpassword: "",
          });
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    console.log(users);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(apiList.login, users)
      .then((res) => {
        if (res.status === 200) {
          const employeetype = res.data.EmployeeType;
          const token = res.data.token;
          console.log(res);
          if (employeetype === "javascript") {
            localStorage.setItem("token", token);
            navigate("/javascript");
            console.log("javascript login successfully");
          } else if (employeetype === "react") {
            localStorage.setItem("token", token);
            navigate("/react");
          } else {
            localStorage.setItem("token", token);
            navigate("/node");
          }
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="login_page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className=" ">
              <div className="row">
                <div className="col-md-12">
                  {login === "login" && (
                    <form className="login_page_card" onSubmit={handleLogin}>
                      <div className="row">
                        <div className="col-md-5 m-auto ">
                          <div>
                            <img
                              src={ramisettylogo}
                              className="img-fluid"
                              alt="logo"
                            />
                          </div>
                        </div>
                        <div className="col-md-7">
                          <h2
                            style={{ color: "#ff3232" }}
                            className="login_head"
                          >
                            Login
                          </h2>
                          <div className="text-left">
                            <label>Email</label>
                          </div>

                          <input
                            type="text"
                            name="email"
                            value={email}
                            className="form-control login_formcontrol"
                            onChange={handleChnage}
                          />

                          <div className="text-left">
                            <label>Password</label>
                          </div>
                          <input
                            type="password"
                            name="password"
                            value={password}
                            className="form-control login_formcontrol"
                            onChange={handleChnage}
                          />
                          <div className="login_button">
                            <button>Login</button>
                          </div>

                          <div>
                            <p>
                              I don't have an account ?{" "}
                              <button
                                onClick={() => setLogin("signup")}
                                className="login_navigatebtn"
                              >
                                Signup
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                  {login === "signup" && (
                    <>
                      <form
                        className="signup_page_card"
                        onSubmit={handleSignup}
                      >
                        <div className="row">
                          <div className="col-md-5 m-auto">
                            <div>
                              <img
                                src={ramisettylogo}
                                className="img-fluid"
                                alt="logo"
                              />
                            </div>
                          </div>
                          <div className="col-md-7">
                            <h2
                              style={{ color: "#ff3232" }}
                              className="login_head"
                            >
                              Signup
                            </h2>
                            <div className="text-left">
                              <label>Type of Signup</label>
                            </div>

                            <select
                              className="form-control login_formcontrol"
                              style={{ cursor: "pointer" }}
                              value={employeetype}
                              name="employeetype"
                              onChange={handleChnage}
                            >
                              <option hidden> ----- Select -----</option>
                              <option value="javascript">Java Script</option>
                              <option value="node">Node.js</option>
                              <option value="react">React.js</option>
                            </select>

                            <div className="text-left">
                              <label>Name</label>
                            </div>

                            <input
                              type="text"
                              value={name}
                              name="name"
                              className="form-control login_formcontrol"
                              onChange={handleChnage}
                            />

                            <div className="text-left">
                              <label>Email</label>
                            </div>

                            <input
                              type="text"
                              value={email}
                              name="email"
                              className="form-control login_formcontrol"
                              onChange={handleChnage}
                            />

                            <div className="text-left">
                              <label>Contact number</label>
                            </div>

                            <input
                              type="text"
                              value={contactnumber}
                              name="contactnumber"
                              className="form-control login_formcontrol"
                              onChange={handleChnage}
                            />

                            <div className="text-left">
                              <label>Password</label>
                            </div>
                            <input
                              type="password"
                              value={password}
                              name="password"
                              className="form-control login_formcontrol"
                              onChange={handleChnage}
                            />

                            <div className="text-left">
                              <label>Confirm password</label>
                            </div>
                            <input
                              type="password"
                              value={confirmpassword}
                              name="confirmpassword"
                              className="form-control login_formcontrol"
                              onChange={handleChnage}
                            />

                            <div className="login_button">
                              <button>Signup</button>
                            </div>

                            <div>
                              <p>
                                already i have an account ?{" "}
                                <button
                                  onClick={() => setLogin("login")}
                                  className="login_navigatebtn"
                                >
                                  login
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
