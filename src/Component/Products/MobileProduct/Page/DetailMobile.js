import axios from "axios";
import { MDBContainer } from "mdbreact";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { AddToCart } from "../../../../Store/Cart/CartAction";
import { fechMobileComment, initfechMobileProductByid } from "../../../../Store/MobileProducts/LaptopProductBy-id/MobileByidAction";
import "../../LaptopProduct/page/Detail.css";
import CommentsMobile from "./featuresMobile/CommentsMobile";
import FeaturesMobile from "./featuresMobile/featuresMobile";

const DetailMobile = (props) => {
  const [state, setstate] = useState({ data: [] });

  const [activeTab, setActiveTab] = useState(1);

  const data = state.data;

  const { id } = useParams();

  useEffect(() => {
    props.initMobileByid(id);
  }, []);

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

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
    props.addtocartMobile(state.data);
  };

  const SubmitComment = (commentParams) => {
    props.initMobileComment(id, commentParams);
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
            <FeaturesMobile />
          ) : (
            <CommentsMobile
              comments={data.comments || []}
              onComment={(test) => SubmitComment(test)}
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
    data: state.MobileProductByid.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addtocartMobile: (MobileProduct) => dispatch(AddToCart(MobileProduct)),
    initMobileByid: (ProductByid) =>
      dispatch(initfechMobileProductByid(ProductByid)),
    initMobileComment: (id, commentParams) =>
      dispatch(fechMobileComment(id, commentParams)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMobile);
