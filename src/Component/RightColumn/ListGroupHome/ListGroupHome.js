import React from 'react';
import "./ListGroupHome.css";

const ListGroupHome =()=>{
   
    return (
        <div>
            <ul className="List-Group">
                <li><i className="fa fa-list-ol"></i>تاریخچه سفارشات من</li>
                <li><i className="fa fa-building"></i>آدرس های تحویل کالا</li>
                <li><i className="fa fa-user"></i>اطلاعات شخصی من</li>
                <li><i className="fa fa-barcode"></i>بن ها و امتیازات تخفیف</li>
                <li><i className="fa fa-heart"></i>لیست علاقه مندی های شما</li>
                <li><i className="fa fa-flash"></i>اعلان های من</li>
                <li><i className="fa fa-heart"></i>محصولات مورد علاقه من</li>
                <li><i className="fa fa-credit-card icon-credit-card"></i>سفارشات پرداخت نشده</li>
            </ul>
        </div>
    )
}

export default ListGroupHome;