import React, { Component } from "react";
import {
  Glyphicon,
  ButtonToolbar,
  Button,
  FormGroup,
  FormControl,
  Panel,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import Notification from "./notification/Notification";
import Pagination from "../pagination/Pagination";
import "./account.css";

class Account extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputValue: ""
    };
  }

  handleChange(e) {
    console.log();
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div>
        <h4 className="gcPageHeader gcBlueText">
          Account History
        </h4>
        <p className="gcGreyText gcStandardText">
          Review and check the status or Read messages about your account
        </p>
        <form>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.inputValue}
              placeholder="Search"
              onChange={this.handleChange}
            />
          </FormGroup>
        </form>
        <div className="resultsContainer">
          <Notification action="Default" actor="Default" dateVal="Today"/>
          <Notification action="Default" actor="Default" dateVal="Today"/>
          <Notification action="Default" actor="Default" dateVal="Today"/>
        </div>
        <Pagination />
      </div>
    );
  }
}

export default Account;
