import { auth } from "firebase/utils";
import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

function Header(props) {
  const { currentUser } = props;
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="http://localhost:3000/"
              rel="noopener noreferrer"
            >
              Shopping App
            </a>
          </Col>

          <Col xs="auto">
            {currentUser ? (
              <div>
                <div>Hello, {currentUser.displayName} | </div>
                <NavLink
                  exact
                  className="header__link"
                  to="/"
                  activeClassName="header__link--active"
                  onClick={() => auth.signOut()}
                >
                  Logout
                </NavLink>
              </div>
            ) : (
              <div>
                <NavLink
                  exact
                  className="header__link"
                  to="/registration"
                  activeClassName="header__link--active"
                >
                  Register
                </NavLink>
                <NavLink
                  exact
                  className="header__link"
                  to="/login"
                  activeClassName="header__link--active"
                >
                  Login
                </NavLink>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
