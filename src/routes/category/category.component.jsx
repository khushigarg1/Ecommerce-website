// import './category.styles.scss';
import { Form, useParams } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';
// import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMAp } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';

import { CategoryContainer, Title } from './category.styles.jsx';

const Category = () => {
    const { category } = useParams();
    // const { categoriesMap } = useContext(CategoriesContext);
    // console.log('render/re-rendering category component');
    const categoriesMap = useSelector(selectCategoriesMAp);
    const [products, setProducts] = useState(categoriesMap[category]);

    const isLoading = useSelector(selectCategoriesIsLoading);

    useEffect(() => {
        // console.log('effect fired calling setproducts');
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    <CategoryContainer>
                        {products &&
                            products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                    </CategoryContainer>
                )}
        </Fragment>
    );
};

export default Category;