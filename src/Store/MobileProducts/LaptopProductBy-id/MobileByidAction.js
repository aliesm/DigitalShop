import axios from "axios";
import { apiurl } from "../../../api/apiUrl";
import * as actionType from "../../ActionType";

export const fechMobileByidstart = () => {
  return {
    type: actionType.FECH_MOBILE_BY_ID_START,
  };
};

export const fechMobileByidSuccess = (productsID) => {
  return {
    type: actionType.FECH_MOBILE_BY_ID_SUCCESS,
    payload: productsID,
  };
};

export const fechMobileByidFauiler = (error) => {
  return {
    type: actionType.FECH_MOBILE_BY_ID_FAUILER,
    payload: error,
  };
};

export const initMobileCommentStart = () => {
  return {
    type: actionType.FECH_MOBILE_COMMNET_START,
  };
};

export const iniMobileCommentSuccess = (commnetData) => {
  console.log("commentData", commnetData);
  return {
    type: actionType.FECH_MOBILE_COMMENT_SUCCESS,
    payload: commnetData,
  };
};

export const initMobileCommentFauiler = (error) => {
  return {
    type: actionType.FECH_MOBILE_COMMNET_FAUILER,
    payload: error,
  };
};

export const initfechMobileProductByid = (id) => {
  return (dispatch) => {
    dispatch(fechMobileByidstart());
    axios
      .get("http://localhost:5000/Mobileproducts/" + id)
      .then((res) => {
        if (res.data) {
          dispatch(fechMobileByidSuccess(res.data));
        } else {
          dispatch(fechMobileByidFauiler(res.error));
        }
      })
      .catch(() => {
        dispatch(fechMobileByidFauiler());
      });
  };
};

export const fechMobileComment = (id, comment) => {
  console.log(id, comment);
  return (dispatch) => {
    dispatch(initMobileCommentStart());
    axios.post("http://localhost:5000/Mobileproducts/" + id + "/comments", comment).then((res) => {
      if (res.status === 200) {
        axios
          .get("http://localhost:5000/Mobileproducts/" + id + "/comments")
          .then((com) => {
            // console.log(com);
            if (com.data) {
              dispatch(iniMobileCommentSuccess(com.data));
            } else {
              dispatch(initMobileCommentFauiler(com.error));
            }
          })
          .catch(() => {
            dispatch(initMobileCommentFauiler(res.error));
          });
      }
    });
  };
};
