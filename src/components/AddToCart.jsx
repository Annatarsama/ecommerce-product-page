import {BiSolidCartAdd} from 'react-icons/bi';
import style from '../index.module.scss'
export default function AddToCart({increase,decrease,amount,addToCart}){
    return (<div>
        <div className={style.addToCart}>
            <div className={style.btnContainer}>
            <div className={style.amountBtn} onClick={decrease}>-</div>
            <div className={style.amount}>{amount}</div>
            <div className={style.amountBtn} onClick={increase}>+</div>
            </div>
            <div onClick={addToCart} className={style.addBtn}><BiSolidCartAdd color='white'/> <span>Add To Cart</span></div>
        </div>
    </div>)
}