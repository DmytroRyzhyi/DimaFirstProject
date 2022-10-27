import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Menu from '../Menu/Menu';

const Header = () => (
  <div className={styles.Header}>
    <header className="p-3 text-bg-danger">
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
      </a>

          <Menu />
          


      <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2">Login</button>
        <button type="button" className="btn btn-warning">Sign-up</button>
      </div>
    </div>
  </div>
</header>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
