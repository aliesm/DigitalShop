import React from 'react';
import './RightColumnMenu.css';
import { RightColumnMenuData } from './RightColumnMenuData';
import SubMenu from './SubMenu';

const RightColumnMenu = () => {


    return (

        <div>
            <p className="titlee_block">شاخه ها</p>
            <div>
                {RightColumnMenuData.map((item, index) => {
                    return <SubMenu item={item} key={index} />
                })}
            </div>
        </div>
    )
}
export default RightColumnMenu;