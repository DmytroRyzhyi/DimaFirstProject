import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from "./../../api/data.json";
import './ProductPage.scss';

const ProductPage = () => {
    let { id } = useParams();

    const [product, setProduct] = useState('');

    useEffect(() => {
        getProduct();
    }, [id])

    const getProduct = () => {
        const selectProduct = data.productList.find(item => +item.id === +id);
        console.log('selectProduct', selectProduct);
        setProduct(selectProduct);
    };

        return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5 product" >
                    <div className='leftProduct'>
                        <p className="col-md-8 fs-4 title">Сковорідка Tefal Cook Eat 24 см</p>
                        <img className="imgPans" src="https://content2.rozetka.com.ua/goods/images/big/294971450.jpg" alt="pan" />
                        <button className=" buttonCostomize" type="button">Замовити</button>
                    </div>
                    <div className='rightProduct'>

                    </div>
            </div>
            </div>
            
        )
    }



export default ProductPage;
