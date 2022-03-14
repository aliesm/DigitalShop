import axios from "axios";
import { apiurl } from "../../../api/apiUrl";
import * as actionType from "../../ActionType";

export const fechLaptopByidstart = () => {
  return {
    type: actionType.FECH_LAPTOP_BY_ID_START,
  };
};

export const fechLaptopByidSuccess = (productsID) => {
  return {
    type: actionType.FECH_LAPTOP_BY_ID_SUCCESS,
    payload: productsID,
  };
};

export const fechLaptopByidFauiler = (error) => {
  return {
    type: actionType.FECH_LAPTOP_BY_ID_FAUILER,
    payload: error,
  };
};

export const initLaptopCommentStart = () => {
  return {
    type: actionType.FECH_LAPTOP_COMMNET_START,
  };
};

export const iniLaptopCommentSuccess = (commnetData) => {
  console.log("commentData", commnetData);
  return {
    type: actionType.FECH_LAPTOP_COMMENT_SUCCESS,
    payload: commnetData,
  };
};

export const initLaptopCommentFauiler = (error) => {
  return {
    type: actionType.FECH_LAPTOP_COMMNET_FAUILER,
    payload: error,
  };
};

export const fechLaptopProductByid = (id) => {
  return (dispatch) => {
    dispatch(fechLaptopByidstart());
    axios
      .get("http://localhost:5000/products/" + id)
      .then((res) => {
        if (res.data) {
          dispatch(fechLaptopByidSuccess(res.data));
        } else {
          dispatch(fechLaptopByidFauiler(res.error));
        }
      })
      .catch(() => {
        dispatch(fechLaptopByidFauiler());
      });
  };
};

export const fechLaptopComment = (id, comment) => {
  console.log(id, comment);
  return (dispatch) => {
    dispatch(initLaptopCommentStart());
    axios.post(apiurl + id + "/comments", comment).then((res) => {
      if (res.status === 200) {
        axios
          .get(apiurl + id + "/comments")
          .then((com) => {
            // console.log(com);
            if (com.data) {
              dispatch(iniLaptopCommentSuccess(com.data));
            } else {
              dispatch(initLaptopCommentFauiler(com.error));
            }
          })
          .catch(() => {
            dispatch(initLaptopCommentFauiler(res.error));
          });
      }
    });
  };
};
