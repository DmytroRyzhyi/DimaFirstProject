import React from 'react';
import PropTypes from 'prop-types';
import styles from './FooterMenu.module.scss';

const FooterMenu = () => {
  const FooterMenuList = ['Home', 'Features', 'Pricing', 'FAQs', 'About'];
  
  return (<div className={styles.FooterMenu}>
    <ul class="nav col-md-4 justify-content-end">
      {
        FooterMenuList.map(item => {
          return (
            <li class="nav-item" key={item}><a href="#" class="nav-link px-4 text-white">{item}</a></li>
          )
        })
      }
    </ul>
  </div>);
}

FooterMenu.propTypes = {};

FooterMenu.defaultProps = {};

export default FooterMenu;
