import './checkout-item.styles.scss'
const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quanity} = cartItem;

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src='imageUrl' alt={`${name}`} />
            </div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default CheckoutItem;