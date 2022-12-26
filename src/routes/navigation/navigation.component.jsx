import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles.jsx';
// import { UserContext } from "../../contexts/user.context";
// import { CartContext } from "../../contexts/cart.context";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from "../../utils/firebase/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
    //selector will rerun currnet user updates it is signin or signout anda ll and react will re render below return components 
    // const currentUser = useSelector((state) => state.user.currentUser);
    const currentUser = useSelector(selectCurrentUser);
    // const { isCartOpen } = useContext(selectIsCartOpen);
    const isCartOpen = useSelector(selectIsCartOpen);
    // console.log(currentUser);

    // const signOutHandler = async () => {
    //     await signOutUser();
    //     setCurrentUser(null);
    // };

    const dispatch = useDispatch();
    const signOutUser = () => dispatch(signOutStart());

    return (
        <Fragment >
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>
                                SIGN OUT
                            </NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            {/* <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="'nav-link" onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div> */}
            <Outlet />
        </Fragment>
    )
}
export default Navigation;