import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    const savedUserName = "jay";
    const savedPassword = "jay123";

    if (UserName === savedUserName && password === savedPassword) {
      alert("Login Successfully");
      navigate("/dashboard", {
        state: {
          userid: UserName,
          password: password,
        },
      });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
     <div className="container">
      <h1>Login</h1>
      <form >
        <div className="field">
          <label >
            UserName
          </label>
          <div >
            <input
              type="text"
              className="username"
              id="inputEmail3"
              placeholder="username"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="password"
              id="inputPassword3"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="button" onClick={handleClick} className="btn btn-success">
          Sign in
        </button>
      </form>
      </div>
    </>
  );
}

export default Login;
