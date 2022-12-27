// /*three types fo button default , inverted , googlesignin button
// */
// import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styles";

// export const BUTTON_TYPE_CLASSES = {
//     base: 'base',
//     google: 'google-sign-in',
//     inverted: 'inverted'
// };

// const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
//     {
//         [BUTTON_TYPE_CLASSES.base]: BaseButton,
//         [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
//         [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
//     }[buttonType]
// );

// const Button = ({ children, buttonType, ...otherProps }) => {
//     const CustomButton = getButton(buttonType);
//     return <CustomButton {...otherProps}>{children}</CustomButton>;
// };

// export default Button;

import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
    LoadingSpinner,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}[buttonType]);

const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <LoadingSpinner /> : children}
        </CustomButton>
    );
};

export default Button;

// const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
//     return (
//         <button
//             disabled={isLoading}
//             className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
//             {...otherProps}
//         >
//             {children}
//         </button>
//     );
// };

// export default Button;