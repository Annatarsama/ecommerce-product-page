import style from '../index.module.scss';
import {BsFillTrashFill} from 'react-icons/bs'
import product_1_small from '../images/image-product-1-thumbnail.jpg'

export default function Cart ({deleteCart,currentAmount,isVisible}){
    const content = <>
     <img src={product_1_small} alt="product" width="50" height="50" />
                <div>
                    <div >Fall Limited Edition Sneakers</div>
                    <div className={style.priceContainer}>
                        <div>$125.00 x {currentAmount}</div>
                        <div style={{fontWeight:"bold"}}>${currentAmount*125}.00</div>
                    </div>
                </div>
                <BsFillTrashFill onClick={deleteCart} color='gray' opacity="0.5" cursor="pointer"/>
    </>
    return (
    <div className={style.cart}>
        <div className={style.cartText}>Cart</div>
        <hr />
        <div className={style.cartContent}>
            <div className={style.item} >
               {isVisible ? content : null}
            </div>
            <div className={style.checkOut}>Checkout</div>
        </div>
    </div>)
}