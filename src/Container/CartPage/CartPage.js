import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CartList from '../../Component/Cart/CartList'
import "./CartPage.css";


const CartPage = (props) => {

    const [state, setstate] = useState({});

    useEffect(() => {
        setstate({ CartLaptop: props.CartLaptop })
    }, [props.CartLaptop])

    return (
        <div className="cartPage ">
            <CartList CartLaptop={state.CartLaptop} />
        </div>
    )
}


const mapStatetoprops = state => {
    return {
        CartLaptop: state.cart,
    }
}

export default connect(mapStatetoprops, null)(CartPage);