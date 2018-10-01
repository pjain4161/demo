import React, { Component } from "react";
import {
  Glyphicon,
  ButtonToolbar,
  Button,
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  Panel,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "./welcome.css";

class Welcome extends Component {
  constructor(props, context) {
    super(props, context);

    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);

    this.state = {
      loginValue: "",
      pwValue: ""
    };
  }

  handlePWChange(e) {
    this.setState({ pwValue: e.target.value });
  }

  handleLoginChange(e) {
    this.setState({ loginValue: e.target.value });
  }

  render() {
    return (
      <div>
        <h4 className="gcPageHeader gcBlueText">Welcome!</h4>
        <p className="gcGreyText gcStandardText">Simple Secure Access</p>
        <Panel className="welcomeCard">
          <form>
            <FormGroup>
              <ControlLabel className="gcGreyText ">Login</ControlLabel>
              <FormControl
                type="text"
                value={this.state.loginValue}
                placeholder=""
                onChange={this.handleLoginChange}
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText">Password</ControlLabel>
              <FormControl
                type="password"
                value={this.state.pwValue}
                placeholder=""
                onChange={this.handlePWChange}
                style={{ marginBottom: "20px" }}
              />
            </FormGroup>
            <h6 className="gcBlueText">FORGOT PASSWORD?</h6>
          </form>
        </Panel>
        <p className="gcGreyText">
          Your oneGC key can be used to access multiple online
          <br />
          <a className="gcBlueText">enabled services</a>
        </p>
        <div className="loginButtonContainer">
          <Button
            className="gcButton"
            style={{ color: "#404040", backgroundColor: "#d1d1d1",width: '35vw' }}
          >
            Cancel
          </Button>
          <Link to="/home"
            className="gcButton btn btn-default"
            style={{ color: "white", backgroundColor: "#1958b7", width: '35vw' }}
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
