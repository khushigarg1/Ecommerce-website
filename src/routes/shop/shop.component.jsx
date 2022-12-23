// import SHOP_DATA from '../../shopdata.json';
// import { useContext } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
// import CategoryPreview from "../../components/category-preview/category-preview.component";
// import ProductCard from "../../components/product-card/product-card.component";

import { Routes, Route } from 'react-router-dom';
import './shop.styles.scss';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
// import { CategoriesProvider } from '../../contexts/categories.context';

const Shop = () => {
    // const { categoriesMap } = useContext(CategoriesContext);
    // return (
    //     <div className="shop-container">
    //         {
    //             Object.keys(categoriesMap).map((title) => {
    //                 const products = categoriesMap[title];
    //                 return <CategoryPreview key={title} title={title} products={products} />
    //             }
    //             )
    //             // (
    //             // <Fragment key={title}>
    //             //     <h2>{title}</h2>
    //             //     <div className="products-container">
    //             //         {categoriesMap[title].map((product) => (
    //             //             <ProductCard key={product.id} product={product} />
    //             //         ))}
    //             //     </div>
    //             // </Fragment>
    //             // )
    //         }
    //     </div>
    // );


    return (
        // <CategoriesProvider>
            <Routes>
                <Route index element={
                    <CategoriesPreview />
                } />
                <Route path=":category" element={
                    <Category />
                } />
            </Routes>
        // </CategoriesProvider>
    );
};

export default Shop;