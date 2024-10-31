import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    // Format the price with commas and VND
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

    return (
        <div>
            <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
                <div className='overflow-hidden'>
                    <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt={name} />
                </div>
                <p className='pt-3 pb-1 text-sm'>{name}</p>
                <p className='text-sm font-medium'>{formattedPrice}</p>
            </Link>
        </div>
    );
};

export default ProductItem;
