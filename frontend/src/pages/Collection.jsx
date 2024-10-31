import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');

    const toggleCategory = (e) => {
        const value = e.target.value;
        setCategory((prev) => 
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    const toggleSubCategory = (e) => {
        const value = e.target.value;
        setSubCategory((prev) => 
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    const applyFilter = () => {
        let productsCopy = products.slice();

        // Search Filter
        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => 
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Category Filter
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => 
                category.includes(item.category)
            );
        }

        // SubCategory Filter
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => 
                subCategory.includes(item.subCategory)
            );
        }

        return productsCopy; // Return filtered products
    };

    const sortProduct = (productsToSort) => {
        let sortedProducts = [...productsToSort]; // Create a copy to sort

        switch (sortType) {
            case 'low-high':
                return sortedProducts.sort((a, b) => a.price - b.price);
            case 'high-low':
                return sortedProducts.sort((a, b) => b.price - a.price);
            default:
                return sortedProducts; // Return unsorted for relevant
        }
    };

    useEffect(() => {
        const filteredProducts = applyFilter();
        const sortedProducts = sortProduct(filteredProducts);
        setFilterProducts(sortedProducts); // Set filtered and sorted products in one go
    }, [category, subCategory, search, showSearch, products, sortType]); // Ensure all necessary dependencies are included

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/** Filter Options */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                    FILTERS
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
                </p>

                {/** Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Nam'} onChange={toggleCategory} />Nam
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Nu'} onChange={toggleCategory} />Nu
                        </p>
                    </div>
                </div>

                {/** SubCategory Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Ao thun
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Ao khoac
                        </p>
                    </div>
                </div>
            </div>

            {/** Right Side */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'COLLECTIONS'} />
                    {/** Products Sort */}
                    <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>

                {/** Map Products */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProducts.map((item, index) => (
                            <ProductItem key={index} name={item.name} price={item.price} image={item.image} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Collection;
