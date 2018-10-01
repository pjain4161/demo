import React, { Component } from "react";
import { Panel, Grid, Row, Col } from "react-bootstrap";
import "./message.css";
import "../../../AppTheme.css";

class Message extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleChange(e) {
    console.log();
    this.setState({ value: e.target.value });
  }
  render(props) {
    return (
      <Panel className="result">
        <Grid>
          <Row>
            <Col xs={12}>Account Type</Col>
            <Col xs={12} className="gcBold">
              {this.props.accountType}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>Status</Col>
          </Row>
          <Row>
            <Col xs={6} className="gcBold">
              {this.props.status}
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }
}

export default Message;
