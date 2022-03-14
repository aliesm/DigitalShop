import React, { Component, useEffect, useState } from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import MainSlider from '../MainSlider/MainSlider';
import RightColumn from '../RightColumn/RightColumn';
import ProductList from './ProductList/ProductList';
import "./HomePage.css";
import HomeTabs from '../HomeTabs/HomeTabs';
// import { ProductsService } from './Products/Services';
import { connect } from 'react-redux';
import { fechLaptopProductstart, fechLaptopProduts } from '../../Store/LaptopProducts/Laptopaction';

class HomePage extends Component {

    componentDidMount() {
        this.props.initFechLaptop();
    }

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
                    <MDBCol lg="9" >
                        <div>
                            <MainSlider />
                        </div>
                        <div className="HomeColImg mt-3">
                            <ul className="Imgs clearfix" >
                                <li className="col-xs-4 col-sm-4 col-md-4">
                                    <img style={{ height: "100%" }} src="./../Image/jpg777.jpg"
                                        className="w-100 img-responsive rounded  center-block ">
                                    </img>
                                </li>
                                <li className="col-xs-4 col-sm-4 col-md-4">
                                    <img style={{ height: "100%" }} src="./../Image/jpg888.jpg"
                                        className="w-100 img-responsive rounded  center-block ">
                                    </img>
                                </li>
                                <li className="col-xs-4 col-sm-4 col-md-4">
                                    <img style={{ height: "100%" }} src="./../Image/jpg999.jpg"
                                        className="w-100 img-responsive rounded  center-block ">
                                    </img>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ProductList products={this.props.LaptopProducts} />
                        </div>
                        <div className="mt-5">
                            <HomeTabs />
                        </div>
                    </MDBCol>
                    <MDBCol lg="3" className="clearfix">
                        <div className="center-block">
                            <RightColumn />
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        LaptopProducts: state.laptopProduct.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initFechLaptop: (Laptop) => dispatch(fechLaptopProduts(Laptop)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
