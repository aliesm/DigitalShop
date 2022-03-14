import React from "react";
import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {

  return (
    <div className="columns-container mt-5 rtl"  >
      <div className="container rtl" >
        <div className="row">
          <section className="footer-block col-xs-6 col-sm-6 col-md-5 col-lg-4">
            <p className="title_block">اطلاعات فروشگاه</p>
            <ul className="toggle-footer">
              <li>
                <i className="bi bi-bookmarks-fill"></i>
                تهران ,چهارراه ولیعصر تهران خیابان ولیعصرو تهران خیابان
                تهران
              </li>
              <li>
                <i className="bi bi-telephone-fill"></i>
                با ما تماس بگیرید در خدمتیم
                <span>687451-45648-4645564</span>
              </li>
              <li><i className="bi bi-clock-fill"></i>ساعت پاسخگویی همه روزه 24 ساعته</li>
              <li>
                <i className="bi bi-envelope-open-fill"></i>
                ایمیل  :
                <span>
                  <a href="https://accounts.google.com/">
                    aliesmaily333@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </section>
          <section className="footer-block col-xs-2 col-sm-3 col-md-2 col-lg-2">
            <p className="title_block">اطلاعات</p>
            <ul className="toggle-footer">
              <li>فروش ویژه</li>
              <li>محصولات جدید</li>
              <li>پرفروش ترین ها</li>
            </ul>
          </section>
          <section className="footer-block col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <p className="title_block">لینک های مفید</p>
            <ul className="toggle-footer">
              <li>روند ارسال سفارش</li>
              <li>مقررات ضمانت ها</li>
              <li>قوانین و مقررات</li>
            </ul>
          </section>
          <section className="footer-block col-xs-2 col-sm-3 col-md-2 col-lg-2">
            <p className="title_block">حساب کاربری</p>
            <ul className="toggle-footer">
              <li>سفارشات من</li>
              <li>صورت های مالی من</li>
              <li>آدرس های مالی</li>
              <li>اطلاعات شخصی شما</li>
              <li> تخفیف های من</li>
            </ul>
          </section>
          <section className="footer-block col-xs-2 col-sm-3 col-md-2 col-lg-2">
            <p className="title_block">دسترسی سریع</p>
            <ul className="toggle-footer">
              <li>قیمت گوشی</li>
              <li> قیمت لپ تاپ</li>
              <li>قیمت ساعت هوشمند</li>
              <li>محصولات شیائومی</li>
              <li>محصولات سامسونگ</li>
            </ul>
          </section>
        </div>
      </div>
      <div className="footerbotom">
        <div className="container p-2">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 footcopyright">تمامی حقوق محفوظ می باشد</div>
            <div className="col-xs-12 col-sm-12 col-md-4 Footericon">
              <ul>
                <li>
                  <a href="https://www.telegram.com">
                    <i className="bi bi-telegram "></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
