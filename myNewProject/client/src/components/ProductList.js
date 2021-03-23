/* eslint-disable react/jsx-no-undef */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
//  import {Link} from '@react/router';

// import axios from 'axios';
const ProductList = (props) => {
    const [products, setProducts] =useState([]);
        useEffect(()=> {
            axios.get("http://localhose:8000/api/Products")
            .then((res) =>{
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) =>
            console.log(err));
            
        },[]);
    return (
        <div>
        <div>All Products</div>
            {products.map((products, index)=>(
                <p>
                <Link to = {`/api/detail/{products.id}`}>{products.title}</Link></p>
            ))};
        </div>
    )
}
export default ProductList;
