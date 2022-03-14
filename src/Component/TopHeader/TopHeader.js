import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact";
import "./TopHeader.css";
import CartIcon from "../Cart/CartIcon";
import { Link } from "react-router-dom";
import Search from "./Search/Search";

const TopHeader = () => {
  return (
    <MDBContainer className="topHeaderContainer rtl">
      <MDBRow>
        <MDBCol lg="8" xs="6" md="6" sm="6">
          <Search />
        </MDBCol>
        <MDBCol className="btncol" lg="4" sm="6" xs="6" md="6">
          <Link to="/Authentication">
            <MDBBtn className="float-left" outline color="secondary">
              ورود/ثبت نام
            </MDBBtn>
          </Link>
          <Link to="/CartPage">
            <CartIcon />
          </Link>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default TopHeader;
