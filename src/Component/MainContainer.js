import React, { Component } from 'react';
import HomePage from './HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import Detail from './Products/page/Detail';
import CartList from './Cart/CartList';
import CartPage from '../Container/CartPage/CartPage';

class MainContainer extends Component {

    render() {
        return (
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                     <Route path="/Detail/:id"><Detail/></Route> 
                     <Route  path="/CartPage" children={<CartPage/>}/> 
                </Switch>
        )
    }
}
export default MainContainer;
