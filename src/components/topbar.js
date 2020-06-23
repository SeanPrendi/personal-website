import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      color="light"
      light
      expand="md"
      sticky="top"
      style={{ maxWidth: "100vw" }}
    >
      <NavbarBrand>Sean Prendi</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Sections
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href={process.env.PUBLIC_URL + "/"}>
                Home
              </DropdownItem>
              <Link to={process.env.PUBLIC_URL + "/#About"}>
                <DropdownItem>About Me</DropdownItem>
              </Link>
              <Link to={process.env.PUBLIC_URL + "/#Projects"}>
                <DropdownItem>Projects</DropdownItem>
              </Link>
              <Link to={process.env.PUBLIC_URL + "/#BlogPosts"}>
                <DropdownItem>Blog Posts</DropdownItem>
              </Link>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <Link to={process.env.PUBLIC_URL + "/blog"}>
              <NavLink>Blog</NavLink>
            </Link>
          </NavItem>
        </Nav>
        <NavbarText style={{ fontSize: "30px", paddingRight: "2%" }}>
          <a className="s_label" href="https://github.com/SeanPrendi">
            <span className="fa fa-github"></span>
          </a>
        </NavbarText>
        <NavbarText style={{ fontSize: "30px", paddingRight: "2%" }}>
          <a
            className="s_label"
            href="https://www.linkedin.com/in/sean-prendi-904943162/"
          >
            <span className="fa fa-linkedin"></span>
          </a>
        </NavbarText>
        <NavbarText style={{ fontSize: "30px" }}>
          <a className="s_label" href="mailto:sprendi@andrew.cmu.edu">
            <span className="fa fa-envelope-o"></span>
          </a>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
}

export default withRouter(TopBar);
