import { createContext, useState, useEffect } from "react";

//when I was fetchind data from json file but now we will use json into js adn will fetch alld ata 
// import PRODUCTS from '../shopdata.json';
// export const ProductsContext = createContext({
//     products: [],
// });

// export const ProductsProvider = ({ children }) => {
//     const [products, setProducts] = useState(PRODUCTS);
//     const value = { products };
//     return (
//         <ProductsContext.Provider value={value}>
//             {children}
//         </ProductsContext.Provider>
//     );
// };

// import SHOP_DATA from '../shopdata.js';
import { getCategoriesAndDocuments } from "../utils/firebase/firebase/firebase.utils.js";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            // console.log(categoryMap);
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
 