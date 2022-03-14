import axios from "axios";
import * as actiontype from "../ActionType";

export const fechGamingAccessoriesProductStart = () => {
  return {
    type: actiontype.FECH_GAMINGACCESSORIES_PRODUCT_START,
  };
};

export const fechGamingAccessoriesProductSuccess = (SmartWatch) => {
  return {
    type: actiontype.FECH_GAMINGACCESSORIES_PRODUCT_SUCCESS,
    payload: SmartWatch,
  };
};

export const fechGamingAccessoriesProductFauiler = (error) => {
  return {
    type: actiontype.FECH_GAMINGACCESSORIES_PRODUCT_FAUILER,
    payload: error,
  };
};

export const fechGamingAccessoriesProduct = () => {
  return (dispatch) => {
    dispatch(fechGamingAccessoriesProductStart());
    axios
      .get("http://localhost:5000/GamingAccessories/")
      .then((res) => {
        if (res.data) {
          dispatch(fechGamingAccessoriesProductSuccess(res.data));
        } else {
          dispatch(fechGamingAccessoriesProductFauiler(res.error));
        }
      })
      .catch(() => {
        dispatch(fechGamingAccessoriesProductFauiler());
      });
  };
};
