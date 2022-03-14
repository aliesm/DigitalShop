import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import * as Icons from "react-icons/fa";
import "./Navbar.css";
// import { navItems } from "./NavItem";
// import Button from "./Button";
// import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className="navbarss bg-light">
        <nav className="navMenu">
          <ul className="menu">
            <li>
              <a href="#link1">لینک اول</a>
            </li>
            <li>
              <a href="#link2">لینک دوم</a>
            </li>
            <li>
              <a href="#link3">لینک سوم</a>
              <ul className="submenu">
                <li>
                  <a href="link3-1"> عنوان فرعی اول </a>
                </li>
                <li>
                  <a href="link3-2"> عنوان فرعی دوم </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#link4">لینک چهارم</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import * as Icons from "react-icons/fa";
// import "./Navbar.css";
// import { navItems } from "./NavItem";
// // import Button from "./Button";
// import Dropdown from "./Dropdown";

// function Navbar() {
//   const [dropdown, setDropdown] = useState(false);

//   return (
//     <>
//       <nav dir="rtl" className="navbar">
//         <ul className="nav-items">
//           {navItems.map((item) => {
//             if (item.title === "لپ تاپ") {
//               return (
//                 <li
//                   key={item.id}
//                   className={item.cName}
//                   onMouseEnter={() => setDropdown(true)}
//                   onMouseLeave={() => setDropdown(false)}
//                 >
//                   <Link to={item.path}>{item.title}</Link>
//                   {dropdown && <Dropdown />}
//                 </li>
//               );
//             }
//             return (
//               <li key={item.id} className={item.cName}>
//                 <Link to={item.path}>{item.title}</Link>
//               </li>
//             );
//           })}
//         </ul>
//         {/* <Button /> */}
//       </nav>
//     </>
//   );
// }

// export default Navbar;
