import React from 'react';
import './Header.scss';
import Menu from '../Menu/Menu';
import { useNavigate } from 'react-router-dom';



const Header = () => {

  const navigate = useNavigate();

  return(
  <div className='navbar navbar-expand-md fixed-top p-3 text-bg-danger'>
    <div className="container-fluid">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Menu />
      </div>
      <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2" onClick={() => navigate('/register')} >Login</button>
        
        <button type="button" className="btn btn-warning" onClick={()=> navigate ('/sign')} >Sign-in</button>
      </div>
    </div>
    </div>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
