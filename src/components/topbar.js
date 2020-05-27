import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
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

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" sticky="top">
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
              <DropdownItem href={process.env.PUBLIC_URL + "/#About"}>
                About Me
              </DropdownItem>
              <DropdownItem href={process.env.PUBLIC_URL + "/#Projects"}>
                Projects
              </DropdownItem>
              <DropdownItem href={process.env.PUBLIC_URL + "/#BlogPosts"}>
                Blog Posts
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <Link to={process.env.PUBLIC_URL + "/blog"}>
              <NavLink>Blog</NavLink>
            </Link>
          </NavItem>
        </Nav>
        <NavbarText style={{ fontSize: "30px" }}>
          {" "}
          <a class="s_label" href="https://github.com/SeanPrendi">
            <span class="fa fa-github"></span>
          </a>
        </NavbarText>
        <div style={{ paddingLeft: "2%" }}></div>
        <NavbarText style={{ fontSize: "30px" }}>
          {" "}
          <a
            class="s_label"
            href="https://www.linkedin.com/in/sean-prendi-904943162/"
          >
            <span class="fa fa-linkedin"></span>
          </a>
        </NavbarText>
        <div style={{ paddingLeft: "2%" }}></div>
        <NavbarText style={{ fontSize: "30px" }}>
          {" "}
          <a class="s_label" href="mailto:sprendi@andrew.cmu.edu">
            <span class="fa fa-envelope-o"></span>
          </a>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
}

export default withRouter(TopBar);
