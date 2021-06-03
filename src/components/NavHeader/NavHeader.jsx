import React from "react";
import { connect } from "react-redux";
import UserMenu from "../UserMenu";
import AuthMenu from "../AuthMenu";
import {
  isAuthentificated,
  currentUserEmail,
} from "../../redux/auth/auth-selectors";

const NavHeader = ({ isAuthentificated, currentUserEmail }) => {
  return (
    <header>
      {isAuthentificated ? <UserMenu email={currentUserEmail} /> : <AuthMenu />}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthentificated: isAuthentificated(state),
  currentUserEmail: currentUserEmail(state),
});

export default connect(mapStateToProps)(NavHeader);
