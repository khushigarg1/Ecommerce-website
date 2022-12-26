import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
// import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMAp } from '../../store/categories/category.selector';

const Category = () => {
    const { category } = useParams();
    // const { categoriesMap } = useContext(CategoriesContext);
    // console.log('render/re-rendering category component');
    const categoriesMap = useSelector(selectCategoriesMAp);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        // console.log('effect fired calling setproducts');
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </>
    )
};

export default Category;