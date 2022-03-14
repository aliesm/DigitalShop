import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fechSearchProductLaptop,
  fechSearchProductMobile,
} from "../../Store/SearchProduct/SearchProductAction";

const SearchList = (props) => {
  const [state, setState] = useState({ data: [] });

  useEffect(() => {
    let isUnmount = false;
    if (!isUnmount) {
      props.initSearchProductMobile(props.location.search);
      props.initSearchProductLaptop(props.location.search);
    }
    return () => {
      isUnmount = true;
    };
  }, []);

  useEffect(() => {
    let isUnmount = false;
    console.log("ismount");
    let products;
    if (props.searchProduct) {
      if (!isUnmount) {
        products = [].concat(...props.searchProduct);
        setState((prevState) => {
          return {
            ...prevState,
            data: props.searchProduct,
          };
        });
      }
    }
    return () => {
      console.log("isunmount");
      isUnmount = true;
    };
  }, [props.searchProduct]);

  // console.log(props.location.search);
  // console.log("searchProduct", state.data);

  return (
    <div className="container">
      <div className="row">
        {state.data.map((item, index) => {
          return (
            <div className="col-4 mt-5" key={index}>
              <div className="card mt-5">
                <img src={item.pic} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p
                    className="text-success"
                    style={{ fontSize: 22, fontWeight: 700 }}
                  >
                    {item.price}
                  </p>
                  <Link to={"/detail/" + item.id}>
                    <span className="btn btn-primary">Show More</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // <div className="col-4">
  //   <div>SearchList</div>
  //   <div>SearchList</div>
  // </div>
};

const mapStateToProps = (state) => {
  return {
    searchProduct: state.searchProduct.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initSearchProductLaptop: (laptop) =>
      dispatch(fechSearchProductLaptop(laptop)),
    initSearchProductMobile: (Mobile) =>
      dispatch(fechSearchProductMobile(Mobile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
