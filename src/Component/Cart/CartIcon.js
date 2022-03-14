import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import "./CartIcon.css";

const CartIcon = (props) => {

    const [state, setstate] = useState({});

    useEffect(() => {
        setstate({ count: props.CartProduct.length })
    }, [props.CartProduct])

    return (
        <div className="CartIcon">
            <img alt="سبد خرید" width="45" src="/Image/Cart/cart.png" />
            {state.count > 0 && (
                <span
                    style={{ position: "absolute", marginTop: -5, marginRight: -52 }}
                    className="badge badge-danger badge-pill"
                >
                    {state.count}
                </span>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        CartProduct: state.cart,
    }
}

export default connect(mapStateToProps, null)(CartIcon);