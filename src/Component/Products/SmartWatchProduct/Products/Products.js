import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import "./Products.css";
import { Link } from "react-router-dom";

const SmartWatchProduct = (props) => {
    
  const data = props.data;

  return (
    <MDBCard>
      <MDBCardImage src={data.pic} className="card-img-top" alt={data.title} />
      <MDBCardBody>
        <MDBCardTitle style={{ fontSize: 15, fontWeight: 700 }}>
          {data.title}
        </MDBCardTitle>
        <MDBCardText>{data.price}</MDBCardText>
        <Link to={"/DetailSmartWatch/" + data.id}>
          <MDBBtn
            rounded
            outline
            size="sm"
            color="primary"
            className="float-right"
          >
            جزییات بیشتر
          </MDBBtn>
        </Link>
      </MDBCardBody>
    </MDBCard>
  );

};

export default SmartWatchProduct;
