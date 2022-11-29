import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
const menuList = ['Home', 'Catalog', 'Pricing', 'FAQs', 'About'];
  
  return (<div className="Menu">
    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
     {
    menuList.map(item => {
        return (
          <li key={item}>
             <NavLink className="menu-link px-4"  to={item}>
              {item}
              </NavLink>
          </li>
        )
    })
}
      
    </ul>
  </div>);
    
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
