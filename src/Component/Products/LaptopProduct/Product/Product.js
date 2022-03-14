import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import "./Product.css";
import { Link } from 'react-router-dom';


const Product = (props) => {
  const data = props.data;
  return (

    <MDBCard >
      <MDBCardImage src={data.pic} className="card-img-top custom" alt={data.title} />
      <MDBCardBody>
        <div className="titleText">
          <MDBCardTitle style={{ fontSize: 15, fontWeight: 700 }}>{data.title}</MDBCardTitle>
        </div>
        <div>
          <MDBCardText >{data.price}</MDBCardText>
        </div>
        <div>
          <Link to={"/DetailLaptop/" + data.id}><MDBBtn rounded outline size="sm" color="primary" className="float-right">جزییات بیشتر</MDBBtn></Link>
        </div>
      </MDBCardBody>
    </MDBCard>

  )
}
export default Product;
