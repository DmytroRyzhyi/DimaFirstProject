import React from 'react';

// import styles from './CatalogItem.module.scss';\
import './CatalogItem.scss';
import { useNavigate } from 'react-router-dom';

const CatalogItem = (props) => {
  const navigate = useNavigate();
  return(
  <div className="CatalogItem">
      <div class="card shadow-sm">
        <div class="card-body">
          <img className="imgPan" src={props.url} alt="pan"/>
        <p class="card-text">{props.name}</p>
        <p class="card-text">{props.brand}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate(`${ props.id }`)}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">{props.price}</small>
              </div>
            </div> 
          </div>
  </div>)
};

CatalogItem.propTypes = {};

CatalogItem.defaultProps = {};

export default CatalogItem;
