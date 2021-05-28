import React from "react";

const RegisterView = () => {
  return (
    <div className="container">
      <h1>Register</h1>
      <form className="inputForm">
        <label className="inputLabel">
          E-mail
          <input className="inputField" type="text" required />
        </label>
        <label className="inputLabel">
          Password
          <input className="inputField" type="text" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterView;
