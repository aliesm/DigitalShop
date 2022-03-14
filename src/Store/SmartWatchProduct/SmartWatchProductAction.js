import axios from "axios";
import * as actiontype from "../ActionType";

export const fechSmartWatchProductStart = () => {
  return {
    type: actiontype.FECH_SMARTWATCH_PRODUCT_START,
  };
};

export const fechSmartWatchProductSuccess = (SmartWatch) => {
  return {
    type: actiontype.FECH_SMARTWATCH_PRODUCT_SUCCESS,
    payload: SmartWatch,
  };
};

export const fechSmartWatchProductFauiler = (error) => {
  return {
    type: actiontype.FECH_SMARTWATCH_PRODUCT_FAUILER,
    payload: error,
  };
};

export const fechSmartWatchProduct = () => {
  return (dispatch) => {
    dispatch(fechSmartWatchProductStart());
    axios
      .get("http://localhost:5000/SmartWatchProducts/")
      .then((res) => {
        if (res.data) {
          dispatch(fechSmartWatchProductSuccess(res.data));
        } else {
          dispatch(fechSmartWatchProductFauiler(res.error));
        }
      })
      .catch(() => {
        dispatch(fechSmartWatchProductFauiler());
      });
  };
};
