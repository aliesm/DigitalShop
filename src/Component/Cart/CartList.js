import React from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { connect } from 'react-redux';
import { quantityCartDown, quantityCartPlus, removeFromCart } from '../../Store/Cart/CartAction';
import "./CartIcon.css";

const CartList = (props) => {

    if (!props.CartLaptop || !props.CartLaptop.length) {
        return <div style={{ marginTop: 100, marginBottom: 100, fontSize: 60 }} className="text-center">!!!سبد خرید خالی است</div>
    }

    const removeHandler = (itemProductRemove) => {
        props.removeProductCart(itemProductRemove);
    };

    const quantityUpHandler = (quantityUp) => {
        props.quantityUp(quantityUp);
    };

    const quantityDownHandler = (quantityDown) => {
        props.quantityDown(quantityDown);
    };

    return (
        <MDBContainer className="mt-5">
            <MDBRow>
                <MDBCol>
                    <MDBTable striped>
                        <MDBTableHead>
                            <tr>
                                <th>ردیف</th>
                                <th>تصویر</th>
                                <th>عنوان</th>
                                <th>قیمت</th>
                                <th>تعداد</th>
                                <th>عملیات</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {props.CartLaptop.map((itemProduct, index) => <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img width="50" src={itemProduct.pic} />
                                </td>
                                <td>{itemProduct.title}</td>
                                <td>{itemProduct.price}</td>
                                <td>
                                    <div>
                                        <span onClick={() => quantityUpHandler(itemProduct)} className="plus"><i className="bi bi-plus-circle"></i></span>
                                        <span className="quantity">{itemProduct.quantity}</span>
                                        <span onClick={() => quantityDownHandler(itemProduct)} className="btn.button-mins" ><i className="bi bi-dash-circle"></i></span>
                                    </div>
                                </td>
                                <td><MDBBtn onClick={() => removeHandler(itemProduct)} rounded outline color="danger" size="sm">حذف</MDBBtn></td>
                            </tr>
                            )}
                        </MDBTableBody>
                    </MDBTable>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        removeProductCart: itemProductRemove => dispatch(removeFromCart(itemProductRemove)),
        quantityUp: quantityUp => dispatch(quantityCartPlus(quantityUp)),
        quantityDown: QuantityDown => dispatch(quantityCartDown(QuantityDown))
    }
};



export default connect(null, mapDispatchToProps)(CartList);