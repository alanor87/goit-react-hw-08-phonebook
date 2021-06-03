import React from "react";
import { connect } from "react-redux";
import { currentUserName } from "../../redux/auth/auth-selectors";

const DefaultLoggedInView = ({ userName }) => {
  return (
    <div className="container">
      <h1>Welcome, {userName}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userName: currentUserName(state),
});

export default connect(mapStateToProps)(DefaultLoggedInView);
