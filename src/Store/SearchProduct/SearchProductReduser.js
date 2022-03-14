import * as actiontype from "../ActionType";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const searchProductReduser = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.FECH_SEARCH_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case actiontype.FECH_SEARCH_PRODUCT_SUCCESS:
      // return Object.assign({}, state, {data: state.data.concat(action.Payload), loading: false,});
      // const productSearch = state;
      // if (productSearch) {
      //   productSearch.quality = state.lenght;
      //   return [...productSearch];
      // }
      // return {
      //   ...state,
      //   loading: false,
      //   data: [...productSearch, action.Payload],
      // };
      // const productSearch = state.data.find(
      //   (item) => item.title === action.payload.title
      // );
      // if (productSearch) {
      //   productSearch.quantity = state.data.length;
      //   console.log("productSearch", productSearch);

      //   return [...state.data, ...productSearch];
      // }
      // const actions = action.Payload;
      return {
        ...state,
        // data: [...state.data, action.Payload],
        data: action.Payload,
        loading: false,
      };
    case actiontype.FECH_SEARCH_PRODUCT_FAUILER:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.Payload,
      };
    default:
      return state;
  }
};

export default searchProductReduser;
