import axios from "axios";
import * as actiontype from "../ActionType";

export const fechSearchProductStart = () => {
  return {
    type: actiontype.FECH_SEARCH_PRODUCT_START,
  };
};

export const fechSearchProductSuccess = (SearchResult) => {
  // console.log(SearchResult);
  return {
    type: actiontype.FECH_SEARCH_PRODUCT_SUCCESS,
    Payload: SearchResult,
  };
};

export const fechSearchProductFauiler = (error) => {
  return {
    type: actiontype.FECH_SEARCH_PRODUCT_FAUILER,
    Payload: error,
  };
};

export const fechSearchProductLaptop = (q = '') => {
  // console.log(q);
  return (dispatch) => {
      dispatch(fechSearchProductStart());
      axios.get("http://localhost:5000/products/" + q).then((res)=>{
           if (res.data) {
             dispatch(fechSearchProductSuccess(res.data))
           } else {
             dispatch(fechSearchProductFauiler(res.error));
           }
      })
      .catch(()=>{
        dispatch(fechSearchProductFauiler());
      })
  };
};

export const fechSearchProductMobile = (q = '') => {
  return (dispatch) => {
      dispatch(fechSearchProductStart());
      axios.get("http://localhost:5000/Mobileproducts/" + q).then((res)=>{
           if (res.data) {
             dispatch(fechSearchProductSuccess(res.data))
           } else {
             dispatch(fechSearchProductFauiler(res.error));
           }
      })
      .catch(()=>{
        dispatch(fechSearchProductFauiler());
      })
  };
};
