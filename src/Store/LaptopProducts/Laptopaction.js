// import { FECH_LAPTOP_PRODCUT_SUCCESS, FECH_LAPTOP_PRODUCT_FAUILER, FECH_LAPTOP_PRODUCT_START } from "../ActionType"
import axios from "axios";
import * as actiontype from "../ActionType";

export const fechLaptopProductstart = () => {
  return {
    type: actiontype.FECH_LAPTOP_PRODUCT_START,
  };
};

export const fechLaptopProductSuccess = (laptopProduct) => {
  return {
    type: actiontype.FECH_LAPTOP_PRODCUT_SUCCESS,
    payload: laptopProduct,
  };
};

export const fechLaptopProductFailure = (error) => {
  return {
    type: actiontype.FECH_LAPTOP_PRODUCT_FAUILER,
    payload: error,
  };
};

export const fechLaptopProduts = () => {
  // console.log(q);
  return (dispatch) => {
    dispatch(fechLaptopProductstart());
    axios
      .get("http://localhost:5000/products/")
      .then((res) => {
        if (res.data) {
          dispatch(fechLaptopProductSuccess(res.data));
        } else {
          dispatch(fechLaptopProductFailure(res.error));
        }
      })
      .catch(() => {
        dispatch(fechLaptopProductFailure());
      });
  };
};
