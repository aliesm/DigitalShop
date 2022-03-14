import { MDBContainer } from "mdbreact";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { AddToCart } from "../../../Store/Cart/CartAction";
import { ProductsService } from "../../HomePage/Products/Services";

const Detail = (props) => {

    //بدون ای پی آی const data = ProductService.getProductById(id);

    const [state, setstate] = useState({ data: [] })

    const data = state.data;

    const { id } = useParams();



    useEffect(() => {
        ProductsService.getProductsByid(id).then(({ data }) => {
            setstate({ data })
        })
    }, [ProductsService.getProductsByid])


    const addToCartHandler=()=>{
         props.addtocart(state.data)
    };


    return (
        <MDBContainer className="mt-5">
            <div className="row">
                <div className="col-5">
                    <img src={data.pic} width="100%" />
                </div>
                <div className="col-7">
                    <h1>{data.title}</h1>
                    <p>{data.Desc}</p>
                    <strong style={styles.price}>{data.price}</strong>
                    <br />
                    <button onClick={addToCartHandler} className="mt-5 btn btn-primary btn-lg">Add to Cart</button>
                </div>
            </div>
        </MDBContainer>
        
    );
}

const styles = {
    price: {
        color: "green",
        fontSize: 24,
    },
};


const mapDispatchToProps = dispatch => {
    return {
      addtocart : LaptopProduct => dispatch(AddToCart(LaptopProduct)),
    }
};

export default connect(null,mapDispatchToProps)(Detail);