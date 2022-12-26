// import { useContext } from "react";
import { useSelector } from "react-redux";
// import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
// import './shop.styles.scss';
import { selectCategoriesMAp } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
    // const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMAp);

    return (
        <>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (<CategoryPreview key={title} title={title} products={products} />);
            })}
        </>
    );
};

export default CategoriesPreview;