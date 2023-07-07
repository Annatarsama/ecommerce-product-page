import style from '../index.module.scss';

export default function ShoppingText(){
    return (
        <div className={style.s_text} >
            <h4>SNEAKER COMPANY</h4>
            <h2>Fall Limited Edition Sneakers</h2>
            <p className={style.info}>These low-profile sneakers are your perfect casual wear
            companion. Featuring a durable rubber outer sole, they’ll
            withstand everything the weather can offer.</p>
            <div className={style.price}>
                <span className={style.priceTag}>125.00$ <span >50%</span></span>
                <span className={style.actualPrice}>250$</span>
            </div>
            
        </div>
    )
}