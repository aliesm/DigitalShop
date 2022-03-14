import * as actiontype from "../ActionType";

const initalstate = {
  loading: false,
  data: [],
  error: "",
};

const SmartWatchProductReduser = (state = initalstate, action) => {
  switch (action.type) {
    case actiontype.FECH_SMARTWATCH_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case actiontype.FECH_SMARTWATCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case actiontype.FECH_SMARTWATCH_PRODUCT_FAUILER:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default SmartWatchProductReduser;
