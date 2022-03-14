import React, { useState } from 'react';
import './RightColumnMenu.css';


const SubMenu = ({ item }) => {
    const [subnav, setsubnav] = useState(false);

    const showSubnav = () => setsubnav(!subnav);

    return (
    
            <div className="sidebar">
                <ul className="sidebar-item">
                    <li onClick={item.subnav && showSubnav}>
                        {item.title}
                        <span>{item.subnav && subnav ? item.iconClosed : item.subnav ? item.iconOpened : null}</span>
                        <ul>
                            {subnav && item.subnav.map((item, index) => {
                                return <li className="subnav" key={index}>{item.title}</li>
                            })}
                        </ul>
                    </li>
                </ul>
            </div>
      

    )
}

export default SubMenu;