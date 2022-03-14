import { MDBCol, MDBView } from 'mdbreact';
import React from 'react';
import ListGroupHome from './ListGroupHome/ListGroupHome';
import RightColumnMenu from './RightColumnMenu/RightColumnMenu';

const RightColumn = () => {
    return (
        <>
            <div>
                <img style={{ height: "100%" }} src="./../Image/1.jpg"
                    className="w-100 img-responsive rounded  center-block ">
                </img>
            </div>
            <div className="mt-4">
                <img src="./../Image/3.jpg"
                    className="w-100 img-responsive rounded  center-block ">
                </img>
            </div>
            <div className="mt-4">
                <img src="./../Image/img4.jpg"
                    className="w-100 img-responsive rounded  center-block ">
                </img>
            </div>
            <div className="mt-4">
                <ListGroupHome />
            </div>
            <div className="mt-4">
                <RightColumnMenu />
            </div>
        </>
    )
}
export default RightColumn;