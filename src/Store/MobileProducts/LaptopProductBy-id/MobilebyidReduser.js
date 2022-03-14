import * as actiontype from "../../ActionType";

const initialstate = {
  loading: false,
  data: [],
  error: "",
};

const MobileProductByidReduser = (state = initialstate, action) => {
  switch (action.type) {
    case actiontype.FECH_MOBILE_BY_ID_START:
      return {
        ...state,
        loading: true,
      };
    case actiontype.FECH_MOBILE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case actiontype.FECH_MOBILE_BY_ID_FAUILER:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case actiontype.FECH_MOBILE_COMMNET_START:
      return {
        ...state,
        loading: true,
      };
    case actiontype.FECH_MOBILE_COMMENT_SUCCESS:
      return {
        ...state,
        data: { ...state.data, comments: action.payload },
        loading: false,
      };
    case actiontype.FECH_MOBILE_COMMNET_FAUILER:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default MobileProductByidReduser;
