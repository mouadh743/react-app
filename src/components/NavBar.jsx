import React, { Component } from "react";
import logo from "../images/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = styled.div`
  padding: 0 30px;
`;
class NavBar extends Component {
  render() {
    return (
      <Nav id="navbar-example2" className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} width="15%" alt="logo" />
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutUs" className="nav-link">
              About us
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/training" className="nav-link">
              Training
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/shopp" className="nav-link">
              Shopp
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/contactUs" className="nav-link">
              Contact us
            </Link>
          </li>
        </ul>
      </Nav>
    );
  }
}

export default NavBar;
