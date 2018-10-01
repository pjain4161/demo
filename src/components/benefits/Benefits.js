import React, { Component } from "react";
import { Button, FormGroup, HelpBlock, FormControl } from "react-bootstrap";
import Benefit from "./benefit/Benefit";
import Pagination from "../pagination/Pagination";
import { Link } from "react-router-dom";

import "./benefits.css";

class Benefits extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchVal: ""
    };
  }

  handleChange(e) {
    this.setState({ searchVal: e.target.value });
  }
  render() {
    return (
      <div>
        <Link
          to="/benefits/enrollment"
          style={{ color: "white", backgroundColor: "#1958b7", float: "right" }}
          className="gcButton"
        >
          Find New Benefits
        </Link>

        <h4 className="benefitsHeader gcBlueText">Your Benefit Enrollments</h4>
        <h6 className="gcGreyText">Showing all benefits you are enrolled</h6>
        <FormGroup>
          <FormControl
            type="text"
            value={this.state.searchVal}
            placeholder="Search"
            onChange={this.handleChange}
            style={{ marginBottom: "20px" }}
          />
        </FormGroup>
        <div className="resultsContainer">
          <Benefit
            name="Veteran Family Program"
            description="Transition-support programs and services to transition from military to post-service life."
          />
          <Benefit
            name="Veteran Family Program"
            description="Transition-support programs and services to transition from military to post-service life."
          />
          <Benefit
            name="Veteran Family Program"
            description="Transition-support programs and services to transition from military to post-service life."
          />
        </div>
        <Pagination />
      </div>
    );
  }
}

export default Benefits;
