import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import FooterMenu from '../FooterMenu/FooterMenu';

const Footer = () => (
  <div className={styles.Footer}>
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-1 my-0 border-top bg-danger ">
    <p class="col-md-4 mb-0 text-white">© 2022 Company, Inc</p>
    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    </a>
   <FooterMenu/>
  </footer>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
