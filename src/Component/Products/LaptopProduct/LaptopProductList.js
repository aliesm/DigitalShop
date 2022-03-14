import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LeftArrow from "../../../Assent/Image/left-arrow.svg";
import RightArrow from "../../../Assent/Image/right-arrow.svg";
import Product from "./Product/Product";
import "./LaptopProductList.css";

const LaptopProductList = (props) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    (<img src={LeftArrow} alt="prevArrow" {...props} />)
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div>
      {/* <h2> محصولات پر فروش </h2> */}
      <Slider {...settings}>
        {props.products.map((item) => (
          <div key={item.id} className="colCard mt-1">
            <Product data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LaptopProductList;
