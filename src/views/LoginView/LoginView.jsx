import React from "react";

const LoginView = () => {
  return (
    <div className="container">
          <h1>Login</h1>
          <form className="inputForm">
              <label className="inputLabel">E-mail<input className="inputField" type="text" required/></label>
              <label className="inputLabel">Password<input className="inputField" type="text" required /></label>
              <button type="submit">Login</button>
          </form>
    </div>
  );
};

export default LoginView;
