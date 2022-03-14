import axios from "axios";
import * as actiontype from "../ActionType";

export const fechMobileProductstart = () => {
  return {
    type: actiontype.FECH_MOBILE_PRODUCT_START,
  };
};

export const fechMobileProductSuccess = (MObileProduct) => {
  return {
    type: actiontype.FECH_MOBILE_PRODUCT_SUCCESS,
    payload: MObileProduct,
  };
};

export const fechMobileProductFauiler = (error) => {
  return {
    type: actiontype.FECH_MOBILE_PRODUCT_FAUILER,
    payload: error,
  };
};

export const fechMobileProduct = () => {
  return (dispatch) => {
    dispatch(fechMobileProductstart());
    axios
      .get("http://localhost:5000/Mobileproducts/")
      .then((res) => {
        if (res.data) {
          dispatch(fechMobileProductSuccess(res.data));
        } else {
          dispatch(fechMobileProductFauiler(res.error));
        }
      })
      .catch(() => {
        dispatch(fechMobileProductFauiler());
      });
  };
};
