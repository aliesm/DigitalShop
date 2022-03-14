import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar color="blue-grey lighten-5"  expand="md" className="rtl">
          {/* <MDBNavbarBrand>
            <strong className="white-text">Navbar</strong>
          </MDBNavbarBrand> */}
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
            {/* <Link to="/">
              <MDBNavItem active>
               
                  <span>صفحه اصلی</span>
                
              </MDBNavItem>
              </Link> */}
              <MDBNavItem>
                <MDBNavLink to="#!">گوشی موبایل</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">تبلت</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">گجت</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="#!">ساعت هوشمند</MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      مچ بند هوشمند سلامتی
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">واقعیت مجازی</MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      انواع لنز و دوربین
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">هندزفری</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">لوازم جانبی</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">لپ تاپ</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">کنسول بازی</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">فناوری</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">وبلاگ</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
