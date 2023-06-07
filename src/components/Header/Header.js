import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.scss";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Flash Card
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/users"
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "inherit",
                  fontWeight: isActive ? "bold" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return isActive ? "active nav-link" : "nav-link";
              }}
            >
              User
            </NavLink>

            <NavLink
              to="/admins"
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "inherit",
                  fontWeight: isActive ? "bold" : "inherit",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive
                  ? "active nav-link"
                  : isPending
                  ? "pending nav-link"
                  : "nav-link";
              }}
            >
              Admin
            </NavLink>
          </Nav>
          <Nav>
            <button className="btn btn-outline-success btn-c">Login</button>
            <button className="btn btn-outline-info btn-c">Login</button>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Signup</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
