//reselects create a concept of memorised selector 
/*
cosnt add = (a,b) => a+b;
add(3,6)      //9
so createselector does that with selectors it memorizes them assuming that as long as the inputs have not changed then your output shoudl always be the same
*/
import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {

    // console.log('selectorr 0 fired');
    return state.categories;
};

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => {
        // console.log('selectorr 1 fired');
        return categoriesSlice.categories;
    });

export const selectCategoriesMAp = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})

    // console.log('selectorr 2 fired');
    //     return categories.reduce((acc, category) => {
    //         const { title, items } = category;
    //         acc[title.toLowerCase()] = items;
    //         return acc;
    //     }, {})
    // }
);

// export const selectCategoriesMAp = (state) => {
//     console.log('selector fired');
//     return state.categories.categories.reduce((acc, category) => {
//         const { title, items } = category;
//         acc[title.toLowerCase()] = items;
//         return acc;
//     }, {});
// }
