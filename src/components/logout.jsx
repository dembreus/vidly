import React, { Component } from "react";
import LoginForm from "./loginForm";
import auth from "../services/authService";
import Logout from "./logout";

class Logout extends Component {
  componentDidMount() {
    auth.logout();

    window.location = "/";
  }
  render() {
    return null;
  }
}
export default Logout;
