import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { AddToCart } from "../../../../Store/Cart/CartAction";
import CommentsGamingAccessores from "./features/Comments";
import FeatureGamingAccessories from "./features/features";

const DetailGamingAccessories = (props) => {
  const [state, setstate] = React.useState({
    Data: [],
  });

  const [activeTab, setActiveTab] = React.useState(1);

  const data = state.Data;

  const { id } = useParams();

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const SubmitComment = (commentParams) => {
    props.initLaptopComment(id, commentParams);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <img src={data.pic} />
          </div>
          <div className="col-7">
            <h1>{data.title}</h1>
            <p>{data.Desc}</p>
            <strong style={styles.price}>{data.price}</strong>
          </div>
          <br />
          <button className="mt-5 btn btn-primary btn-lg">خرید</button>
        </div>
      </div>
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
            <FeatureGamingAccessories />
          ) : (
            <CommentsGamingAccessores
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
    addtocart: (accessories) => dispatch(AddToCart(accessories)),
    // initLaptopByid: (ProductByid) =>
    //   dispatch(fechLaptopProductByid(ProductByid)),
    // initLaptopComment: (id, commentParams) =>
    //   dispatch(fechLaptopComment(id, commentParams)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailGamingAccessories);
