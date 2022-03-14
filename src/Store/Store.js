import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import CartReduser from "./Cart/CartReduser";
import GamingAccessoriesProductReduser from "./GamingAccessoriesProduct/GamingAccessoriesProductReduser";
import LaptopProductByidReduser from "./LaptopProducts/LaptopProductBy-id/LaptopByidReduser";
import LaptopProductReduser from "./LaptopProducts/LaptopReduser";
import MobileProductByidReduser from "./MobileProducts/LaptopProductBy-id/MobilebyidReduser";
import MobileProductReduser from "./MobileProducts/MobileReduser";
import searchProductReduser from "./SearchProduct/SearchProductReduser";
import SmartWatchProductByidReduser from "./SmartWatchProduct/SmartWatchProductBy-id/SmartWatchbyidReduser";
import SmartWatchProductReduser from "./SmartWatchProduct/SmartWatchProductReduser";

const rootReduser = combineReducers({
  cart: CartReduser,
  laptopProduct: LaptopProductReduser,
  laptopProductByid: LaptopProductByidReduser,
  MobileProduct: MobileProductReduser,
  MobileProductByid: MobileProductByidReduser,
  searchProduct: searchProductReduser,
  smartWatchProduct: SmartWatchProductReduser,
  smartWatchProductByid: SmartWatchProductByidReduser,
  GamingAccessoriesProduct: GamingAccessoriesProductReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const cartStore = createStore(rootReduser(applyMiddleware(thunk)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const cartStore = createStore(
  rootReduser,
  composeEnhancers(applyMiddleware(thunk))
);
