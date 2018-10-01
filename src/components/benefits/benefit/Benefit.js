import React, { Component } from "react";
import { Panel, Grid, Row, Col, Button } from "react-bootstrap";
import "./benefit.css";
import "../../../AppTheme.css";

class Benefit extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleChange(e) {
    console.log();
    this.setState({ value: e.target.value });
  }
  render(props) {
    return (
      <Panel className="benefit">
        <Grid>
          <Row>
            <Col className="gcBold" xs={12}>{this.props.name}</Col>
          </Row>
          <Row>
            <Col className="gcGreyText" xs={12}>{this.props.description}</Col>
          </Row>
          <Row>
            <Col xs={6} className="gcBold">
            </Col>
            <Col xs={6}>
              <Button style={{marginTop: '5px', padding:"5px", width: "30vw", float: 'right'}} className="blueButton gcButton">View</Button>
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }
}

export default Benefit;
