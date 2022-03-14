import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./FooterPage.css";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 rtl">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">دفتر مرکزی</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">اطلاعات</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">فروش ویژه</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">محصولات جدید</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">پرفروش ها</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">تماس با ما</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">لینک های مفید</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">روند سفارشات</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">قوانین و مقررات</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">درباره کالاتیک</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">مقررات ضمانت 10روزه</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
          <span className="exam">sc</span>
            <h5 className="title">حساب کاربری</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">سفارشات من</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">صورت های مالی من</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">آدرس های من</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">اطلاعات شخصی شما</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">تخفیف های شما</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;