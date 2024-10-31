import { createContext, useState } from "react";
import { products } from "../assets/assets"; // Ensure this matches the export

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'VNĐ';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true); // Set to true for displaying search results immediately

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
