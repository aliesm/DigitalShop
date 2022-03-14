import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import MainSlider from "../../Component/MainSlider/MainSlider";
import RightColumn from "../../Component/RightColumn/RightColumn";
import "./HomePage.css";
import HomeTabs from "../../Component/HomeTabs/HomeTabs";
// import { ProductsService } from './Products/Services';
import { connect } from "react-redux";
import { fechLaptopProduts } from "../../Store/LaptopProducts/Laptopaction";
import LaptopProductList from "../../Component/Products/LaptopProduct/LaptopProductList";
import { fechMobileProduct } from "../../Store/MobileProducts/MobileAction";
import MobileProductList from "../../Component/Products/MobileProduct/MobileProductslist";
import SmartWatchProductList from "../../Component/Products/SmartWatchProduct/SmartWatchProductList";
import { fechSmartWatchProduct } from "../../Store/SmartWatchProduct/SmartWatchProductAction";
import GamingAccessoriesProductList from "../../Component/Products/GamingAccessories/GamingAccessoriesProductList";
import { fechGamingAccessoriesProduct } from "../../Store/GamingAccessoriesProduct/GamingAccessoriesProductAction";

class HomePage extends Component {
  fechData() {
    this.props.initFechLaptop(this.props.location.search);
    this.props.initFechMobile(this.props.location.search);
    this.props.initFechSmartWatch();
    this.props.initFechGamingAccessories();
  }

  componentDidMount() {
    this.fechData();
  }

  componentWillUnmount() {
    this.fechData();
  }

  // componentDidUpdate(){
  //   this.fechData();
  // }

  //بدون ای پی آی const [state, setstate] = useState({ product: ProductService.getProduct() })

  //برای کامپوننت فانکشی بود
  // const [state, setstate] = useState({ product: [] })

  // useEffect(() => {
  //     ProductsService.getProduct().then((res) => {
  //         setstate({ product: res.data })
  //     })
  // }, [ProductsService.getProduct]);

  render() {
    return (
      <MDBContainer className="mt-3">
        <MDBRow>
          <MDBCol lg="9">
            <div>
              <MainSlider />
            </div>
            <div className="HomeColImg mt-3">
              <ul className="Imgs clearfix">
                <li className="col-xs-4 col-sm-4 col-md-4">
                  <img
                    style={{ height: "100%" }}
                    src="./../Image/jpg777.jpg"
                    className="w-100 img-responsive rounded  center-block "
                  ></img>
                </li>
                <li className="col-xs-4 col-sm-4 col-md-4">
                  <img
                    style={{ height: "100%" }}
                    src="./../Image/jpg888.jpg"
                    className="w-100 img-responsive rounded  center-block "
                  ></img>
                </li>
                <li className="col-xs-4 col-sm-4 col-md-4">
                  <img
                    style={{ height: "100%" }}
                    src="./../Image/jpg999.jpg"
                    className="w-100 img-responsive rounded  center-block "
                  ></img>
                </li>
              </ul>
            </div>
            <div>
              <LaptopProductList products={this.props.LaptopProducts} />
            </div>
            <div className="mt-5">
              <HomeTabs />
            </div>
            <div className="mt-3">
              <MobileProductList products={this.props.MobileProduct} />
            </div>
            <div className="mt-5">
              <SmartWatchProductList products={this.props.SmartWatchProduct} />
            </div>
            <div className="mt-5">
              <GamingAccessoriesProductList
                products={this.props.GamingAccessoriesProduct}
              />
            </div>
          </MDBCol>
          <MDBCol lg="3" className="clearfix">
            <div className="center-block">
              <RightColumn />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    LaptopProducts: state.laptopProduct.data,
    MobileProduct: state.MobileProduct.data,
    SmartWatchProduct: state.smartWatchProduct.data,
    GamingAccessoriesProduct: state.GamingAccessoriesProduct.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initFechLaptop: () => dispatch(fechLaptopProduts()),
    initFechMobile: () => dispatch(fechMobileProduct()),
    initFechSmartWatch: () => dispatch(fechSmartWatchProduct()),
    initFechGamingAccessories: () => dispatch(fechGamingAccessoriesProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
