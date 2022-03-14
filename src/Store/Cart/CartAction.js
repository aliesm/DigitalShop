import { ADD_TO_CART, REMOVE_TO_CART, CART_PRODUCT_QUANTITY_Up ,CART_PRODUCT_QUANTITY_Down } from "../ActionType";

export const AddToCart = (LaptopProduct) => {
    console.log('LaptopProduct',LaptopProduct);
    return {
        type: ADD_TO_CART,
        payload: LaptopProduct
    };
};

export const removeFromCart = (itemProductRemove) => {
    return {
        type: REMOVE_TO_CART,
        payload: itemProductRemove
    };
};

export const quantityCartPlus = (cartProductQuantity) => {
    return {
        type: CART_PRODUCT_QUANTITY_Up,
        payload: cartProductQuantity
    };
};

export const quantityCartDown=(cartProductQuantity)=>{
    return{
         type: CART_PRODUCT_QUANTITY_Down,
         payload : cartProductQuantity,
    };
};

