import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import { HashRouter, Link } from "react-router-dom";
import "./home.css";
import "../../AppTheme.css";

class Home extends Component {
  render() {
    return (
        <div>
          <h4 className="gcPageHeader gcBlueText">Welcome, Mary!</h4>
          <Panel className="gcBlueBackground centeredPanel">
            <Panel.Body className="gcWhiteText gcStandardText">
              You have no outstanding messages
            </Panel.Body>
          </Panel>
          <div className="tileContainer">
            <Link to="/home" className="homeTile" >
              <div className="titleImageContainer">Image Placeholder</div>
              <span className="gcBlueText gcStandardText">News</span>
            </Link>
            <Link to="/messages" className="homeTile">
              <div className="titleImageContainer">Image Placeholder</div>
              <span className="gcBlueText gcStandardText">Notifications</span>
            </Link>
            <Link to="/account" className="homeTile">
              <div className="titleImageContainer">Image Placeholder</div>
              <span className="gcBlueText gcStandardText">Account History</span>
            </Link>
            <Link to="/benefits" className="homeTile">
              <div className="titleImageContainer">Image Placeholder</div>
              <span className="gcBlueText gcStandardText">Benefits</span>
            </Link>
          </div>
        </div>
    );
  }
}

export default Home;
