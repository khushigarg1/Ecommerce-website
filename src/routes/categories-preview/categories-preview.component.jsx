// import { useContext } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
// import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
// import './shop.styles.scss';
import { selectCategoriesIsLoading, selectCategoriesMAp } from "../../store/categories/category.selector";


const CategoriesPreview = () => {
    // const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMAp);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <Fragment>
            {
                isLoading ?
                    (<Spinner />) :
                    (Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return (<CategoryPreview key={title} title={title} products={products} />);
                    }))
            }
        </Fragment>
    );
};

export default CategoriesPreview;