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
  Checkbox,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "./enrollment.css";

class Enrollment extends Component {
  render() {
    return (
      <div>
        <h4 className="gcPageHeader gcBlueText">Benefit Enrollment</h4>
        <Panel className="enrollmentCard">
          <form>
            <FormGroup>
              <ControlLabel className="gcGreyText ">1. Select your province or territory:</ControlLabel>
              <FormControl
                type="text"
                value=""
                placeholder=""
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText">2. What is your age?</ControlLabel>
              <FormControl
                type="number"
                value=""
                placeholder=""
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText">3. What is your marital status?</ControlLabel>
              <FormControl
                type="text"
                value=""
                placeholder=""
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText">4. Do you consider your household income to be low?</ControlLabel>
              <FormControl
                type="text"
                value=""
                placeholder=""
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText">5. What is your employment situation?</ControlLabel>
              <FormControl
                type="text"
                value=""
                placeholder=""
                style={{ marginBottom: "20px" }}
              />
              <ControlLabel className="gcGreyText ">6. What best describes your health situation? (Check all that apply)</ControlLabel>
              <Checkbox>...</Checkbox>
              <Checkbox>...</Checkbox>
              <Checkbox>...</Checkbox>
              <ControlLabel className="gcGreyText ">7. I am ... (Check all that apply)</ControlLabel>
              <Checkbox>...</Checkbox>
              <Checkbox>...</Checkbox>
              <Checkbox>...</Checkbox>
            </FormGroup>
          </form>
        </Panel>
        <div className="loginButtonContainer" style={{justifyContent: 'flex-end'}}>
          <Link
            to="/Benefits"
            className="gcButton btn btn-default"
            style={{ color: "white", backgroundColor: "#1958b7" }}
          >
            Verify
          </Link>
        </div>
      </div>
    );
  }
}

export default Enrollment;
