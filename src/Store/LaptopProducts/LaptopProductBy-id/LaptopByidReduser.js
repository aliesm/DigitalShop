import * as actiontype from "../../ActionType";

const initialstate = {
  loading: false,
  data: [],
  error: "",
};

const LaptopProductByidReduser = (state = initialstate, action) => {
  switch (action.type) {
    case actiontype.FECH_LAPTOP_BY_ID_START:
      return {
        ...state,
        loading: true,
      };

    case actiontype.FECH_LAPTOP_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case actiontype.FECH_LAPTOP_BY_ID_FAUILER:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actiontype.FECH_LAPTOP_COMMNET_START:
      return {
        ...state,
        loading: true,
      };
    case actiontype.FECH_LAPTOP_COMMENT_SUCCESS:
      return {
        ...state,
        data: { ...state.data, comments: action.payload },
        loading: false,
      };
    case actiontype.FECH_LAPTOP_COMMNET_FAUILER:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default LaptopProductByidReduser;
