import React from 'react';
import PropTypes from 'prop-types';
// import styles from './CatalogItem.module.scss';\
import './CatalogItem.scss';

const CatalogItem = (props) => (
  <div className="CatalogItem">
            <div class="card shadow-sm">
            <svg class="bd-placeh older-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
        <p class="card-text">{props.name}</p>
        <p class="card-text">{props.brand}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">{props.price}</small>
              </div>
            </div>
          </div>
  </div>
);

CatalogItem.propTypes = {};

CatalogItem.defaultProps = {};

export default CatalogItem;
