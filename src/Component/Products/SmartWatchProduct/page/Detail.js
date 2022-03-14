import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { AddToCart } from "../../../../Store/Cart/CartAction";
import { fechSmartWatchComment, initfechSmartWatchByid } from "../../../../Store/SmartWatchProduct/SmartWatchProductBy-id/SmartWatchByidAction";
import CommentsSmartWatchs from "./features/Comments";
import FeatureSmartWatchs from "./features/features";

const DetailSmartWatch = (props) => {
  const [state, setstate] = React.useState({ Data: [] });
  const [activeTab, setActiveTab] = React.useState(1);

  const data = state.Data;

  const { id } = useParams();

  useEffect(() => {
    props.iniSmartWatchByid(id);
  }, []);

  useEffect(() => {
    if (props.data) {
      setstate((prevState) => {
        return {
          ...prevState,
          Data: props.data,
        };
      });
    }
  }, [props.data]);

  const addToCartHandler = () => {
    props.addToCart(state.Data);
  };

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const SubmitComment = (commentParams) => {
    props.initSmartWatchComment(id, commentParams);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <img src={data.pic} width="100%" />
          </div>
          <div className="col-7">
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
            <strong style={styles.price}>{data.price}</strong>
          </div>
          <br />
          <button
            onClick={addToCartHandler}
            className="mt-5 btn btn-primary btn-lg"
          >
            خرید
          </button>
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
            <FeatureSmartWatchs />
          ) : (
            <CommentsSmartWatchs
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
    data: state.smartWatchProductByid.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    iniSmartWatchByid: (id) => dispatch(initfechSmartWatchByid(id)),
    addToCart: (smartWatchProduct) => dispatch(AddToCart(smartWatchProduct)),
    initSmartWatchComment: (id, commentParams) =>
      dispatch(fechSmartWatchComment(id, commentParams)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSmartWatch);
