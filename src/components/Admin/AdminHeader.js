import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const AdminHeader = (props) => {
  const { collapsed, setCollapsed, account, isAuthenticated } = props;
  return (
    <Navbar bg="light" expand="lg">
      <FaBars
        onClick={() => setCollapsed(!collapsed)}
        className="collapse-toggle"
      />
      {isAuthenticated ? (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="navbar-brand"></NavLink>
          </Nav>
          <Nav>
            {/* <Avatar
                round={true}
                size="40"
                src={
                  !_.isEmpty(account.avatar)
                    ? account.avatar
                    : "https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-512x488-rddkk3u9.png"
                }
                name="Foo Bar"
              /> */}
            <NavDropdown id="basic-nav-dropdown" title={account.username}>
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      ) : (
        ""
      )}
    </Navbar>
  );
};
