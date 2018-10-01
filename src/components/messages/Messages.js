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
import Message from "./message/Message";
import Pagination from "../pagination/Pagination";
import "./messages.css";

class Messages extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputValue: ""
    };
  }

  handleChange(e) {
    console.log();
    this.setState({ inputValue: e.target.value });
  }
  render() {
    return (
      <div>
        <h4 className="gcPageHeader gcBlueText">
          Message Centre - Account Notifications
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
          <Message accountType="Default" status="Default" />
          <Message accountType="Default" status="Default" />
          <Message accountType="Default" status="Default" />
        </div>
        <Pagination />
      </div>
    );
  }
}

export default Messages;
