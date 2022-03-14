import React, { Component } from "react";
import HomePage from "./Container/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import DetailLaptop from "./Component/Products/LaptopProduct/page/Detail";
import CartPage from "./Container/CartPage/CartPage";
import DetailMobile from "./Component/Products/MobileProduct/Page/DetailMobile";
import SearchList from "./Component/SearchList/SearchList";
import DetailGamingAccessories from "./Component/Products/GamingAccessories/page/Detail";
import DetailSmartWatch from "./Component/Products/SmartWatchProduct/page/Detail";
import Authentication from "./Component/Register/Authentication";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/Authentication" component={Authentication}/>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={SearchList} />
        <Route path="/DetailLaptop/:id">
          <DetailLaptop />
        </Route>
        <Route path="/DetailMobile/:id">
          <DetailMobile />
        </Route>
        <Route path="/DetailSmartWatch/:id">
          <DetailSmartWatch />
        </Route>
        <Route path="/DetailGamingAccessories/:id">
          <DetailGamingAccessories />
        </Route>

        <Route path="/CartPage" children={<CartPage />} />
      </Switch>
    );
  }
}
export default Main;
