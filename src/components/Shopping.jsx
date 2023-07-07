import ShoppingSlider from "./ShoppingSlider";
import ShoppingText from "./ShoppingText";
import AddToCart from './AddToCart';
import style from '../index.module.scss';
import Cart from "./Cart";

export default function Shopping({openSlider,isCartVisible,deleteCart,currentAmount,isVisible,increase,decrease,amount ,addToCart}){
    return (<div className={style.shopping}>
        {isCartVisible ? <Cart deleteCart={deleteCart} isVisible={isVisible} currentAmount={currentAmount}/> : null}
            <ShoppingSlider openSlider={openSlider}/>
        <div className={style.parentText_Cart}>
            <ShoppingText/>
            <AddToCart addToCart={addToCart} increase={increase} decrease={decrease} amount={amount}/>
        </div>
    </div>)
}