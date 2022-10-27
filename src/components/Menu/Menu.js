import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';

const Menu = () => {
const menuList = ['Home', 'Features', 'Pricing', 'FAQs', 'About'];
  
  return (<div className={styles.Menu}>
    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
     {
    menuList.map(item => {
        return (
            <li className="nav-link px-4 text-white" key={item}>{item}</li>
        )
    })
}
      
    </ul>
  </div>);
    
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
