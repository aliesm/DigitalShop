import axios from "axios";
import * as actionType from "../../ActionType";

export const fechSmartWatchByidstart = () => {
  return {
    type: actionType.FECH_SMARTWATCH_BY_ID_START,
  };
};

export const fechSmartWatchByidSuccess = (productsID) => {
  return {
    type: actionType.FECH_SMARTWATCH_BY_ID_SUCCESS,
    payload: productsID,
  };
};

export const fechSmartWatchByidFauiler = (error) => {
  return {
    type: actionType.FECH_SMARTWATCH_BY_ID_FAUILER,
    payload: error,
  };
};

export const initSmartWatchCommentStart = () => {
  return {
    type: actionType.FECH_SMARTWATCH_COMMNET_START,
  };
};

export const iniSmartWatchCommentSuccess = (commnetData) => {
  console.log("commentData", commnetData);
  return {
    type: actionType.FECH_SMARTWATCH_COMMENT_SUCCESS,
    payload: commnetData,
  };
};

export const initSmartWatchCommentFauiler = (error) => {
  return {
    type: actionType.FECH_SMARTWATCH_COMMNET_FAUILER,
    payload: error,
  };
};

export const initfechSmartWatchByid = (id) => {
  return (dispatch) => {
    dispatch(fechSmartWatchByidstart());
    axios
      .get("http://localhost:5000/SmartWatchProducts/" + id)
      .then((res) => {
        if (res.data) {
          dispatch(fechSmartWatchByidSuccess(res.data));
        } else {
          dispatch(fechSmartWatchByidFauiler(res.error));
        }
      })
      .catch(() => {
        dispatch(fechSmartWatchByidFauiler());
      });
  };
};

export const fechSmartWatchComment = (id, comment) => {
  console.log(id, comment);
  return (dispatch) => {
    dispatch(initSmartWatchCommentStart());
    axios
      .post(
        "http://localhost:5000/SmartWatchProducts/" + id + "/comments",
        comment
      )
      .then((res) => {
        if (res.status === 200) {
          axios
            .get("http://localhost:5000/SmartWatchProducts/" + id + "/comments")
            .then((com) => {
              // console.log(com);
              if (com.data) {
                dispatch(iniSmartWatchCommentSuccess(com.data));
              } else {
                dispatch(initSmartWatchCommentFauiler(com.error));
              }
            })
            .catch(() => {
              dispatch(initSmartWatchCommentFauiler(res.error));
            });
        }
      });
  };
};
