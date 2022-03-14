import * as actiontype from '../ActionType';

const initialstate = {
    loading: false,
    data: [],
    error: ''
}


const LaptopProductReduser = (state = initialstate, action) => {
    switch (action.type) {
        case actiontype.FECH_LAPTOP_PRODUCT_START:
            return {
                ...state,
                loading: true,
            }

        case actiontype.FECH_LAPTOP_PRODCUT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case actiontype.FECH_LAPTOP_PRODUCT_FAUILER:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default LaptopProductReduser;