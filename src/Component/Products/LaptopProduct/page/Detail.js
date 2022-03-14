import axios from "axios";
import { MDBContainer } from "mdbreact";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { AddToCart } from "../../../../Store/Cart/CartAction";
import {
  fechLaptopComment,
  fechLaptopProductByid,
} from "../../../../Store/LaptopProducts/LaptopProductBy-id/LaptopByidAction";
import "./Detail.css";
import Comments from "./features/Comments";
import Features from "./features/features";

const DetailLaptop = (props) => {
  //بدون ای پی آی const data = ProductService.getProductById(id);

  // گرفتن آی پی بدون ریداکس
  // useEffect(() => {
  //     ProductsService.getProductsByid(id).then(({ data }) => {
  //         setstate({ data })
  //     })
  // }, [ProductsService.getProductsByid])

  const [state, setstate] = useState({ data: [] });

  const [activeTab, setActiveTab] = useState(1);

  const data = state.data;

  const { id } = useParams();

  useEffect(() => {
    props.initLaptopByid(id);
  }, []);

  useEffect(() => {
    if (props.data) {
      setstate((prevState) => {
        return {
          ...prevState,
          data: props.data,
        };
      });
    }
  }, [props.data]);

  const addToCartHandler = () => {
    props.addtocart(state.data);
  };

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const SubmitComment = (commentParams) => {
    props.initLaptopComment(id, commentParams);
  };

  return (
    <>
      <MDBContainer className="mt-5">
        <div className="row">
          <div className="col-5">
            <img src={data.pic} width="100%" />
          </div>
          <div className="col-7">
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
            <strong style={styles.price}>{data.price}</strong>
            <br />
            <button
              onClick={addToCartHandler}
              className="mt-5 btn btn-primary btn-lg"
            >
              خرید محصول
            </button>
          </div>
        </div>
      </MDBContainer>
      <div className="Detail">
        <ul>
          <li
            onClick={() => handleActiveTab(2)}
            className={activeTab === 2 ? "CommentsActive" : "Comments"}
          >
            نظرات
          </li>
          <li
            onClick={() => handleActiveTab(1)}
            className={
              activeTab === 1 ? "specificationActive" : "specification"
            }
          >
            مشخصات
          </li>
        </ul>
        <div className="DetailTab ">
          {activeTab === 1 ? (
            <Features />
          ) : (
            <Comments
              comments={data.comments || []}
              onComment={(commentParams) => SubmitComment(commentParams)}
            />
          )}
        </div>
      </div>
    </>
  );
};

const styles = {
  price: {
    color: "green",
    fontSize: 24,
  },
};

const mapStateToProps = (state) => {
  return {
    data: state.laptopProductByid.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addtocart: (LaptopProduct) => dispatch(AddToCart(LaptopProduct)),
    initLaptopByid: (ProductByid) =>
      dispatch(fechLaptopProductByid(ProductByid)),
    initLaptopComment: (id, commentParams) =>
      dispatch(fechLaptopComment(id, commentParams)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailLaptop);
